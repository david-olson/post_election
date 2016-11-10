document.ready = function() {
    var wid = window.innerWidth;
    var div = wid / 2.3;
    if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/)) || $.browser.msie == 1) {
        document.getElementById('Layer_1').style.minHeight = div + 'px';
        document.getElementById('Layer_1').style.display = 'inline-block';
        document.getElementById('Layer_1').style.verticalAlign = 'baseline';
    }
}