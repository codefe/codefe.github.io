(function () {
    //logo add sound
    var logobtn = document.getElementById('logobtn');
    var cat = document.getElementById('cat');
    logobtn.addEventListener('mouseover', function () {
        cat.play();
    })

    //tip add sound
    var tipbtn = document.getElementById('tipbtn');
    var chime = document.getElementById('chime');
    tipbtn.addEventListener('mouseover', function () {
        chime.play();
    })

    //更新菜单
    upNav();
    function upNav() {
        let obj = document.querySelector('#nav-head');
        let objfoot = document.querySelector('#nav-foot');

        let fragment = document.createDocumentFragment();    //创建文档片段

        db.map((item) => {

            // nav
            let nav = document.createElement("nav");
            let p = document.createElement("p");
            p.appendChild(document.createTextNode(item.title));
            nav.appendChild(p)
            let ul = document.createElement("ul");

            //子菜单
            if (item.child && item.child.length > 0) {

                item.child.map((rs) => {

                    let li = document.createElement("li");
                    let ahref = document.createElement('a');
                    ahref.href = '/lists?id=' + rs.id;
                    ahref.appendChild(document.createTextNode(rs.title));
                    li.appendChild(ahref)
                    ul.appendChild(li)

                })

            }
            nav.appendChild(ul)

            //更新ui
            fragment.appendChild(nav);

        })
        let tp = fragment.cloneNode(true);
        obj.appendChild(fragment);    //将文档片段添加到文档中
        objfoot.appendChild(tp);
    }

    //更新links
    upLinks();
    function upLinks() {
        let obj = document.querySelector('#links');
        let fragment = document.createDocumentFragment();    //创建文档片段
        links.web.map((item) => {
            let ahref = document.createElement('a');
            ahref.href = item.url;
            ahref.target = '_blank';
            ahref.appendChild(document.createTextNode(item.title));
            fragment.appendChild(ahref);
        })
        obj.appendChild(fragment);    //将文档片段添加到文档中
    }

})();