(function () {
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
        constructor() {

        }
        footNav() {
            let html = `<a href="/m/catalog.html" class="flex-item"><i class="ic-list"></i><em>分类</em></a>
                        <a href="/m/index.html" class="navlogo"><i class="icono-home"></i></a>
                        <a href="/m/my.html" class="flex-item"><i class="ic-my"></i><em>我</em></a>`;
            document.querySelector('footer').innerHTML = html;
        }
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
        getCatalog(){
            let html = '';
            db.map(item=>{
                html += `<p data-id="${item.id}" onclick="mApi.getCatalogList(${item.id})">${item.title}</p>`;
            })
            document.querySelector('.navaside').innerHTML = html;
            this.getCatalogList(db[0].id);
        }
        getCatalogList(id){
            //设置当前样式
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
        getPath(){
            let pathname = location.pathname.split('/')[2];
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
                default:
                    console.log('default')
            }
        }
        goTop(){
            let el = document.querySelector('.wrap');
            el.scrollTo({
                top:0,
                left:0,
                behavior: 'smooth'
            });
        }
    }
    let api = new Mapi();
    api.getPath();
    window.mApi = api;
}());
