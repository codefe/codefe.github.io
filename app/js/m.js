(function () {
    //lib-flexible响应式
    (function flexible (window, document) {
        var docEl = document.documentElement
        var dpr = window.devicePixelRatio || 1

        // adjust body font size
        function setBodyFontSize() {
            if (document.body) {
                document.body.style.fontSize = (12 * dpr) + 'px'
            }
            else {
                document.addEventListener('DOMContentLoaded', setBodyFontSize)
            }
        }
        setBodyFontSize();

        // set 1rem = viewWidth / 10
        function setRemUnit() {
            var rem = docEl.clientWidth / 10
            docEl.style.fontSize = rem + 'px'
        }

        setRemUnit()

        // reset rem unit on page resize
        window.addEventListener('resize', setRemUnit)
        window.addEventListener('pageshow', function (e) {
            if (e.persisted) {
                setRemUnit()
            }
        })

        // detect 0.5px supports
        if (dpr >= 2) {
            var fakeBody = document.createElement('body')
            var testElement = document.createElement('div')
            testElement.style.border = '.5px solid transparent'
            fakeBody.appendChild(testElement)
            docEl.appendChild(fakeBody)
            if (testElement.offsetHeight === 1) {
                docEl.classList.add('hairlines')
            }
            docEl.removeChild(fakeBody)
        }
    }(window, document));

    class Mapi {
        constructor(){
            this.obj=null;
            this.url = '';
        }
        /**
         * 公共函数
         * 
         * getUrl     获取当前url及参数
         * footNav    底部切换菜单
         * goTop      返回顶部
         * dialog     显示弹窗
         * dialogHide 隐藏弹窗
         * query      获取懒加载img图片列表
         * observer   懒加载数据监控
         * getFetch   fetch网络请求
         */
         getUrl() {
            var url = location;
            return {
                name: url.pathname,
                args: url.search.substr(1).split('=')[1] || ''
            }
        }
        footNav() {
            let html = `<a href="/m/catalog.html" class="flex-item"><i class="mic ic-catalog"></i><em>分类</em></a>
                        <a href="/m/index.html" class="mic navlogo"></a>
                        <a href="/m/my.html" class="flex-item"><i class="mic ic-my"></i><em>我的</em></a>`;
            document.querySelector('footer').innerHTML = html;
        }
        goTop(){
            let el = document.querySelector('.wrap');
            el.scrollTo({
                top:0,
                left:0,
                behavior: 'smooth'
            });
        }
        dialog(title,ic="no"){
            let ichtml = '';
            let btnhtml = '';
            switch(ic){
                case 'loading':
                    ichtml += `<div><img src="/app/img/common/loading.gif" height="80"></div>`;
                    break;
                default:
                    btnhtml += `<div class="dialog-btnc"><a onclick="mApi.dialogHide(500,true)"class="dialog-btn-ok">确定</a></div>`;
            }
            let txt = `<div class="dialog-bg"></div>
                       <div class="dialog-cont">
                           <div class="dialog-tit">提示</div>
                           ${ichtml}
                           <div class="dialog-msg">${title}</div>
                           ${btnhtml}
                       </div>`;
            let obj = document.createElement('div');
				obj.innerHTML = txt;
				obj.className = 'dialog';
            document.body.appendChild(obj);
        }
        dialogHide(time=500,flag=true){
            let el = document.querySelector('.dialog-cont');
            setTimeout(()=>{
                let obj = document.querySelector('.dialog');
                el.classList.add('dialog-hide');
                document.body.removeChild(obj);
                if(flag){
                    location.href="/m/catalog.html";
                }
            },time)
        }
        query() {
            return Array.from(document.querySelectorAll('[data-src]'));
        }
        observer(){
            return new IntersectionObserver(
                changes => {
                    changes.forEach(change => {
                        if(change.isIntersecting){
                            change.target.src = change.target.dataset.src
                            this.observer().unobserve(change.target);
                        }
                    })
                },{
                    threshold: [0, 0.5, 1]
                }
            )
        }
		getFetch(url) {
			this.dialog('数据加载中...','loading');
			return new Promise(function (resolve, reject) {
				fetch("/app/json/" + url + ".json?t=" + Date.now(), { method: 'GET' })
					.then((response) => {
						if (response.ok) {
							return response.json();
						} else {
							reject({ status: response.status })
						}
					})
					.then((response) => {
						resolve(response);
					})
					.catch(() => {
						setTimeout(() => {
                            this.dialog('请求失败');
						}, 500);
						reject({ status: -1 });
					})
					.finally(() => {
						mApi.dialogHide(500,false);
					})
			});
		}
        /**
         * index 页面
         * 
         * banner
         * homeList 首页数据处理
         */
        banner() {
            let html = `<section class="banner_list"><a href="#1"><img src="/app/img/banner/ad1.jpg"/></a>
                        <a href="#2"><img src="/app/img/banner/ad2.jpg"/></a>
                        <a href="#3"><img src="/app/img/banner/ad3.jpg"/></a>
                        <a href="#4"><img src="/app/img/banner/ad4.jpg"/></a>
                        <a href="#1"><img src="/app/img/banner/ad1.jpg"/></a></section>`;
            document.querySelector('.banner').innerHTML = html;
        }
        homeList() {
            return new Promise(resolve => {
                var html = '';
                for (let item of db) {
                    html += '<dl class="flex flex-row"><dt>' + item.title + '</dt>';
                    for (let ra of item.child) {
                        for (let rb of ra.child) {
                            if (rb.flag && rb.flag.indexOf('recommend') === 0) {
                                rb.count = rb.child && rb.child.length || 0;
                                html += `<dd class="flex flex-col">
                                            <a href="list.html?id=${rb.id}">
                                            <p><img data-src="${rb.icon}"></p>
                                            <p class="flex flex-sb m10">
                                                <span>${rb.title}</span>
                                                <small>${rb.count}节</small>
                                            </p>
                                            </a>
                                        </dd>`;
                            }
                        }
                    }
                    html += '</dl>'
                }
                resolve(html);
            })
        }
        /**
         * catalog 页面
         * 
         * getCatalog        左侧菜单
         * getCatalogList    根据左侧菜单点击设置当前样式
         * getCatalogData    根据左侧菜单点击获取数据
         */
        getCatalog(){
            let html = '';
            db.map(item=>{
                html += `<p data-id="${item.id}" onclick="mApi.getCatalogList(${item.id})">${item.title}</p>`;
            })
            document.querySelector('.navaside').innerHTML = html;
            this.getCatalogList(db[0].id);
        }
        getCatalogList(id){
            let obj = Array.from(document.querySelector('.navaside').children);
            obj.map(item=>{
                if(item.dataset.id === ''+id){
                    item.classList.add('action')
                }else{
                    item.classList.remove('action')
                }
            })
            //获取数据
            this.getCatalogData(id);
        }
        getCatalogData(id){
            let data = db.filter(item=>item.id === id)[0].child;
            let html = '';
            //导航
            for (let ra of data) {
                html += `<h3>${ra.title}</h3>`;
                for (let rb of ra.child) {
                    let ic = '';
                    if(rb.icon){
                        ic = `<img data-src="${rb.icon}"/>`;
                    }else{
                        ic = `无图`;
                    }
                    if (rb.child) {
                        html += `<a class="flex" href="list.html?id=${rb.id}">
                            <figure>${ic}</figure>
                            <figcaption>${rb.title}</figcaption>
                            </a>`;
                    } else {
                        html += `<a class="flex ano" href="javascript:;"">
                            <figure>${ic}</figure>
                            <figcaption>${rb.title}</figcaption>
                            </a>`;
                    }
                }
            }

            document.querySelector('.catalogList').innerHTML = html;
            //返回顶部
            catalogList.scrollTo({
                top:0,
                left:0,
                behavior: 'auto'
            });
            //懒加载图片
            this.query().forEach(item => {
                this.observer().observe(item);
            });
        }
        /**
         * list 页面
         * 
         * moveScrollTop     设置当前标题在章节目录居中
         * toggleListHide    隐藏章节目录
         * toggleList        显示隐藏章节目录
         * getListHome       获取首页及章节目录
         * getArticle        显示文章内容
         * setPrenext        设置上一页，下一页 1
         * getPrenextUrl     计算上一页，下一页 2
         * touchEvent        触屏
         */
         touchEvent(){
            listArticle.addEventListener('touchstart',(event)=>{
                if (event.targetTouches.length == 1) {
                    var touch = event.targetTouches[0];
                    // 判断是否在中间宽度80px处
                    let w = document.body.clientWidth/2;
                    if(w-40 < touch.clientX && touch.clientX < w+40 ){
                        event.preventDefault();// 阻止浏览器默认事件，重要 
                        this.touchToggle();
                    }
                }
             },{ passive: false })
         }
         touchToggle(){
             let el = document.querySelector('.prenext');
             el.classList.toggle('hide');
         }
         moveScrollTop() {
            let elid;
            if(this.obj.child && this.obj.child.length>0){
                this.obj.child.forEach((it,index)=>{
                    if(it.url===this.url){
                        elid = index
                    }
                })
                //获取外框信息
                let outEl = document.querySelector('.listaside');
                let outElInfo = outEl.getBoundingClientRect();
                //获取当前标题元素信息
                let el = document.querySelectorAll('.listaside p')[elid];
                //向上滚动距离
                outEl.scrollTop = el.offsetTop - outElInfo.height / 2;
            }
        }
        toggleListHide(){
            document.body.addEventListener('click',()=>{
                let el = document.querySelector('.listaside');
                if(el.classList.contains('show')){
                    el.classList.remove('show');
                }
            })
        }
        toggleList(ev){
            ev.stopPropagation();
            let el = document.querySelector('.listaside');
            el.classList.toggle('show');
        }
        getListHome(id){
            if(id===0){
                return this.dialog('非法操作');
            }
            let pid = id.slice(0,2)*1;
            let sid = id.slice(0,4)*1;
            id *= 1;
            const obj = db.filter(item=>item.id===pid)[0].child.filter(ra=>ra.id===sid)[0].child.filter(rb=>rb.id===id)[0];
            document.querySelector('.catalogTitle').innerHTML = obj.title;
            this.obj = obj;
            let desc = '';
            if(obj.icon){
                desc += `<p><img src="${obj.icon}"/></p><section>${obj.desc}</section>`
            }else{
                desc += `<section>${obj.desc}</section>`
            }
            document.querySelector('.listArticle').innerHTML = desc;
            if(obj.child&&obj.child.length>0){
                let html = `<h2>章节目录 (${obj.child.length}节)</h2>`;
                obj.child.map((item,index)=>{
                    html += `<p onclick="mApi.getArticle('${item.url}',${index})">${index+1}. ${item.title}</p>`;
                })
                document.querySelector('.listaside').innerHTML = html;
                this.setPrenext({next:obj.child[0].url,nextIndex:0});
            }
        }
        setPrenext(url){
            let el = document.querySelector('.prenext');
            let html = '';
            if(url.pre){
                html += `<p onclick="mApi.getArticle('${url.pre}',${url.preIndex})"><i class="mic ic-pre"></i></p>`;
            }else{
                html += `<p class="hide"><i class="mic ic-pre"></i></p>`;
            }
            if(url.next){
                html += `<p onclick="mApi.getArticle('${url.next}',${url.nextIndex})"><i class="mic ic-pre"></i></p>`;
            }else{
                html += `<p class="hide"><i class="mic ic-pre"></i></p>`;
            }
            el.innerHTML = html;
        }
        getPrenextUrl(url){
            let id = '';
            let pre = '';
            let next = '';
            let para = {};
            let len = this.obj.child.length;
            this.obj.child.map((rs,index)=>{
                if(rs.url===url){
                    id = index;
                }
            })
            if(id>0&&id<len){
                para.pre = this.obj.child[id-1].url;
                para.preIndex = id-1;
            }
            if(id>=0&&id<len-1){
                para.next = this.obj.child[id+1].url;
                para.nextIndex = id+1;
            }
            this.setPrenext(para);
        }
        getArticle(url,id){
            this.getPrenextUrl(url);
            this.url = url;
            this.moveScrollTop();
            //获取数据
            let str = url.split('-').join('/');
            this.getFetch(str).then(rs => {
                let html = `<section class="listTitle">${rs.data.subTitle}</section>`;
                html += rs.data.content.replace(/<code>/g,'').replace(/<\/code>/g,'').replace(/.\/app/g,'/app');
                document.querySelector('.listArticle').innerHTML = html;
                document.querySelector('#listArticle').scrollTo({top:0,left:0})
            }).catch(err => {
                console.log(err)
            });
            //设置章节目录样式
            let menu = Array.from(document.querySelectorAll('.listaside p'));
            menu.map((item,index)=>{
                if(index === id){
                    item.classList.add('cur');
                }else{
                    item.classList.remove('cur');
                }
            })
        }
        /**
         * 根据当前路径显示要加载的内容
         */
        init(){
            let pathname = location.pathname.split('/')[2];
            let para = location.search.split('=')[1] || 0;
            switch(pathname){
                case '':
                case 'index.html':
                    this.footNav();
                    this.banner();
                    this.homeList().then(html => {
                        document.querySelector('.homelist').innerHTML = html;
                        //懒加载图片
                        this.query().forEach(item => {
                            this.observer().observe(item);
                        });
                    });
                    
                    break;
                case 'my.html':
                    this.footNav();
                    break;
                case 'catalog.html':
                    this.footNav();
                    this.getCatalog();
                    break;
                case 'list.html':
                    this.footNav();
                    this.toggleListHide();
                    this.getListHome(para);
                    this.touchEvent();
                    break;
                default:
                    console.log('default')
            }
        }
    }
    let api = new Mapi();
    api.init();
    window.mApi = api;
}());
