$(function(){
    var canvas = document.getElementById('parent');
    var canvas2 = document.getElementById('child');
    if(!canvas || !canvas.getContext) return false;
    if(!canvas2 || !canvas2.getContext) return false;
    var ctx = canvas.getContext('2d');
    var ctx2 = canvas2.getContext('2d');

    var startX,
        startY,
        x,
        y,
        lot,
        borderWidth = 10,
        isDrawing = false;
        lotString = null;

    // 前面レイヤ
    // 四角形の描画
    ctx2.fillStyle = "rgb(255,255,255)";
    ctx2.fillRect(0,0, canvas.width, canvas.height); // 塗りつぶし
    
    $('#child').on('mousedown touchstart', function (e) {
        isDrawing = true;
        pageX = e.pageX ? e.pageX : e.changedTouches[0].pageX
        pageY = e.pageY ? e.pageY : e.changedTouches[0].pageY
        startX = pageX - $(this).offset().left - borderWidth;
        startY = pageY - $(this).offset().top - borderWidth;
    }).on('mousemove touchmove', function (e) {
        if (!isDrawing) return;
        pageX = e.pageX ? e.pageX : e.changedTouches[0].pageX
        pageY = e.pageY ? e.pageY : e.changedTouches[0].pageY
        x = pageX - $(this).offset().left - borderWidth;
        y = pageY - $(this).offset().top - borderWidth;
        ctx2.beginPath();
        ctx2.moveTo(x, y);
        ctx2.clearRect(x, y, 20, 20); // 切り抜き
        startX = x;
        startY = y;
    }).on('mouseup touchend', function (e) {
            isDrawing = false;
        })
});
$(window).on('touchmove.noScroll', function(e) {
    e.preventDefault();
});