//判断是否是移动设备访问
(function(){
    let reg = /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i;
    let ua = window.navigator.userAgent.toLowerCase();
    if(reg.test(ua)){
        location.href = "/m/index.html";
    }
})();