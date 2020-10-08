'use strict';

~(function() {
    var $ = TweenMax,
        ad = document.getElementById('mainContent');

    window.init = function() {
        setTimeout(play, 1000);

        var w = window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;

        var h = window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight;

        var x = document.getElementById("info");
        x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";
    }

    function play() {
        var tl = gsap.timeline({});

        tl.addLabel('frameOne')
        tl.to('#logo', 2, { width: 1500, height: 1500, ease: Power1.easeOut });
        tl.to('#logoText', 1, { top: 60, ease: Sine.easeIn }, "frameOne+=1");
        tl.to('#logo', 1, { width: 74, height: 74, top: 60, ease: Sine.easeIn }, "frameOne+=1.2");

    }

})();

window.onload = init();