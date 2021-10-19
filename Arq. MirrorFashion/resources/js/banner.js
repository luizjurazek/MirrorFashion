var banners = ["../img/destaque-home.png"];
var bannerAtual = 0;

function trocarBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.banner-destaque img').src = banners[bannerAtual];
}


var timer = setInterval(trocarBanner, 100000);
var controle = document.querySelector('.pause');

controle.onclick = function () {
    if (controle.className == 'pause') {
        clearInterval(time);
        controle.className = 'play';
    } else {
        time = setInterval(trocarBanner, 4000);
        controle.className = 'pause';
    }
    return false;
};