(function(){
    // nav
    let data = links.tool;
    let el = document.querySelector('nav');
    let str = '';
    data.map(item=>{
        str += `<a href="${item.url}">${item.title}</a>`;
    })
    el.innerHTML = str;
    // foot
    let ef = document.querySelector('.aside-footer');
    ef.innerHTML = `copyright`;
})();