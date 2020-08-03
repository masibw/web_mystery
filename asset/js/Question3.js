$(function () {
  var canvas = document.getElementById("parent");
  var canvas2 = document.getElementById("child");
  if (!canvas || !canvas.getContext) return false;
  if (!canvas2 || !canvas2.getContext) return false;
  var ctx = canvas.getContext("2d");
  var ctx2 = canvas2.getContext("2d");

  var startX,
    startY,
    x,
    y,
    lot,
    borderWidth = 10,
    isDrawing = false;
  lotString = null;

 
  // 四角形の描画
  $("canvas").get(0).width = $(window).width();
  $("canvas").get(0).height = $(window).height();
  $("canvas").get(1).width = $(window).width();
  $("canvas").get(1).height = $(window).height();

  const layerImage = new Image();
    layerImage.src = "./img/scr2.png";
    if ($(window).width() <= 480) {
     layerImage.width = $("#scratch").width();
     layerImage.height = $("#scratch").height();
    } else {
       layerImage.width = $("#scratch").width();
       layerImage.height = $("#scratch").height();
    }
 
  console.log(layerImage.width, layerImage.height);
    layerImage.onload = () => {
       // 前面レイヤ
  //回転
        if ($(window).width() <= 480) {
           ctx2.translate(0,$(window).height()/2-layerImage.height/2)
          }
        
 ctx2.drawImage(layerImage, 0, 0, layerImage.width, layerImage.height);
  };

  $("#child")
    .on("mousedown touchstart", function (e) {
      isDrawing = true;
      pageX = e.pageX ? e.pageX : e.changedTouches[0].pageX;
      pageY = e.pageY ? e.pageY : e.changedTouches[0].pageY;
      console.log(pageX, pageY);
      startX = pageX - $(this).offset().left - borderWidth;
      console.log($(this).offset());
      console.log(borderWidth);
      startY = pageY - $(this).offset().top - borderWidth;
    })
    .on("mousemove touchmove", function (e) {
      if (!isDrawing) return;
      pageX = e.pageX ? e.pageX : e.changedTouches[0].pageX;
      pageY = e.pageY ? e.pageY : e.changedTouches[0].pageY;
      x = pageX - $(this).offset().left - borderWidth;
      y = pageY - $(this).offset().top - borderWidth;
      ctx2.beginPath();
      ctx2.moveTo(x, y);
      ctx2.clearRect(x, y, 20, 20); // 切り抜き
      startX = x;
      startY = y;
    })
      .on("mouseup touchend", function (e) {
          isDrawing = false;
      });
});
$(window).on("touchmove.noScroll", function (e) {
  e.preventDefault();
});
