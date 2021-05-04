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
                    html += '<dl class="flex flex-break"><dt>' + item.title + '</dt>';
                    for (let ra of item.child) {
                        for (let rb of ra.child) {
                            if (rb.flag && rb.flag.indexOf('recommend') === 0) {
                                rb.count = rb.child && rb.child.length || 0;
                                html += `<dd class="flex flex-col">
                                            <a href="list.html?id=${rb.id}">
                                            <p><img src="${rb.icon}"></p>
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
        getPath(){
            let pathname = location.pathname.split('/')[2];
            switch(pathname){
                case '':
                case 'index.html':
                    this.footNav();
                    this.banner();
                    this.homeList().then(html => {
                        document.querySelector('.homelist').innerHTML = html;
                    });
                    break;
                case 'my.html':
                    this.footNav();
                    break;
                case 'catalog.html':
                    this.footNav();
                    break;
                default:
                    console.log('default')
            }
        }
        goTop(e){
            e.stopPropagation();//停止冒泡;
			(function scrollTo() {
				let c = document.documentElement.scrollTop || document.body.scrollTop;
				if (c > 0) {
					window.requestAnimationFrame(scrollTo);
					window.scrollTo(0, c - c / 10);
				}
			}());
        }
    }
    let api = new Mapi();
    api.getPath();
    window.mApi = api;
}());
