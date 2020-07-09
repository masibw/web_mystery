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

    // 背面レイヤ
    // 文字の描画
    ctx.font = 'bold 50px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'orange';
    
    lotString = "アタリを消してください";
    
    ctx.fillText(lotString, 200, 150, 300); // (文字,始点x,y,最大横幅)に文字を描画
    ctx.strokeText(lotString, 200, 150, 300); // 縁取り文字を描画

    // 前面レイヤ
    // 四角形の描画
    ctx2.fillStyle = "rgb(188,167,141)";
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