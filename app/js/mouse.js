(function () {
    let coreSocialistValues = ["HTML5", "CSS3", "ES6", "TypeScript", "VUE", "REACT", "NodeJS", "Webpack", "Vite"];
    let index = Math.floor(Math.random() * coreSocialistValues.length);
    document.body.addEventListener('click', function (e) {
        if (e.target.tagName == 'A') {
            return;
        }
        var x = e.pageX,
            y = e.pageY,
            span = document.createElement('span');

        span.textContent = coreSocialistValues[index];
        index = (index + 1) % coreSocialistValues.length;//取模循环
        span.style.cssText = ['z-index: 9999999; position: absolute; font-weight: bold; color:red; top: ', y - 20, 'px; left: ', x, 'px;'].join('');
        document.body.appendChild(span);
        animate(span);
    });


    function animate(el) {//动画
        var i = 0,
            top = parseInt(el.style.top),
            id = setInterval(frame, 24);

        function frame() {//帧
            if (i > 180) {
                clearInterval(id);
                el.parentNode.removeChild(el);
            } else {
                i += 2;
                el.style.top = top - i + 'px';
                el.style.opacity = (180 - i) / 180;
            }
        }
    }
}());