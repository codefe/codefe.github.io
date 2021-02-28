class api {
    constructor(){
        this.links = `<a href="$url$" target="_blank">$title$</a>`;
        this.homeList = `<li class="flex-wrap flex-col ani-line"><a href="list.html?id=$id$"><p><img src="$icon$"></p><p>$title$</p></a></li>`;
        this.listDesc = `<h3 class="navigation"><span><a href="./index.html">首页</a> &raquo; $name$</span></h3><section class="list-title"><h1>$title$</h1><p>$desc$</p></section><section class="list-content">`;

    }
    _fetch(url){
        return new Promise(function (resolve, reject) {
            fetch("./app/json/" + url + ".json?t=" + Date.now(), { method: 'GET' })
            .then(res=>{
                if (res.ok) {
                    return res.json();
                } else {
                    setTimeout(function () {
                        alert('Err ' + res.status + ' : ' + res.statusText);
                    }, 500);
                    reject({ status: res.status })
                }
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                setTimeout(function () {
                    alert('请求失败');
                }, 500);
                reject({ status: -1 });
            })
        });
    }

    _tpls

}