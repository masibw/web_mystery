"use strict";
(function () {

    // let map = [
    //    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    //    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    //    [1, 0, 1, 0, 0, 0, 0, 0, 1],
    //    [1, 0, 1, 0, 0, 0, 1, 0, 1],
    //    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    //    [1, 1, 0, 0, 0, 0, 0, 0, 1],
    //    [1, 0, 0, 1, 1, 0, 1, 0, 1],
    //    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    //    [1, 1, 1, 1, 1, 1, 1, 1, 1]
    //   ];

    let map = [

      [1, 1, 1, 1,1,   1, 1, 1, 1,1,   1, 1 ,1 ,1,1   ,1 ,1 ,1 ,1,1   ,1,1, 1, 1, 1,  1, 1, 1, 1,1  ,1,1, 1 ,1, 1,  1 , 1,1,1,1, 1,1,1,1, 1],
      [1, 1, 1, 1,1,   1, 1, 1, 1,1,   1, 1 ,1 ,1,1   ,1 ,1 ,1 ,1,1   ,1,1, 1, 1, 1,  1, 1, 1, 1,1  ,1,1, 1 ,1, 1,  1 , 1,1,1,1, 1,1,1,1, 1],
      [1, 1, 1, 1,1,   1, 1, 1, 1,1,   1, 1 ,1 ,1,1   ,1 ,1 ,1 ,1,1   ,1,1, 1, 1, 1,  1, 1, 1, 1,1  ,1,1, 1 ,1, 1,  1 , 1,1,1,1, 1,1,1,1, 1],
      [1, 1, 1, 1,1,   1, 1, 1, 1,1,   1, 1 ,1 ,1,1   ,1 ,1 ,1 ,1,1   ,1,1, 1, 1, 1,  1, 1, 1, 1,1  ,1,1, 1 ,1, 1,  1 , 1,1,1,1, 1,1,1,1, 1],
      [1, 1, 1, 1,1,   1, 1, 1, 1,1,   1, 1 ,1 ,1,1   ,1 ,1 ,1 ,1,1   ,1,1, 1, 1, 1,  1, 1, 1, 1,1  ,1,1, 1 ,1, 1,  1 , 1,1,1,1, 1,1,1,1, 1],


//①
        // 6
         [ 1,1,1,1,1 ,       0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,           1,1,1,1,1],
        // 7
         [ 1,1,1,1,1 ,       0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,0,                   1,1,1,1,1],
        // 8
        [ 1,1,1,1,1 ,        0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,0,                           1,1,1,1,1],
        //9
        [ 1,1,1,1,1 ,        0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,0,                           1,1,1,1,1],
        // 10
         [ 1,1,1,1,1 ,       0,0,0,0,1, 1,1,1,1,1,  1,1,1,1,1, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,0,                       1,1,1,1,1],
//②
         // 11
         [ 1,1,1,1,1 ,      0,0,0,0,1, 0,0,0,0,0,  0,0,0,0,1, 0,0,0,0,0,   0,0,0,0,1,0,0,0,0,1, 0,0,0,0,0,  1,1,1,1,1],
         // 12
         [ 1,1,1,1,1 ,      0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0,  0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0,  1,1,1,1,1],
         // 13
         [ 1,1,1,1,1 ,      0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0,  0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0,   1,1,1,1,1],
         //14
         [ 1,1,1,1,1 ,      0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0,  0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0,   1,1,1,1,1],
         // 15
         [1,1,1,1,1 ,     0,0,0,0,1,  1,1,1,1,1, 0,0,0,0,1, 1,1,1,1,1,  1,1,1,1,1, 0,0,0,0,1, 0,0,0,0,0,   1,1,1,1,1],
//③
         // 16
         [ 1,1,1,1,1 ,     0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0,   0,0,0,0,1,   0,0,0,0,0,   1,1,1,1,1],
         // 17
         [ 1,1,1,1,1 ,     0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0,   0,0,0,0,1,   0,0,0,0,0, 1,1,1,1,1],
         // 18
         [ 1,1,1,1,1 ,     0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0,   0,0,0,0,1,  0,0,0,0,0,  1,1,1,1,1],
         //19
         [ 1,1,1,1,1 ,     0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0,   0,0,0,0,1,  0,0,0,0,0,  1,1,1,1,1],
         // 20
         [ 1,1,1,1,1 ,     1,1,1,1,1, 0,0,0,0,1, 1,1,1,1,1, 0,0,0,0,1 ,1,1,1,1,1,   0,0,0,0,1,   1,1,1,1,1,  1,1,1,1,1],
//④
         // 21
         [ 1,1,1,1,1 ,    0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0,  1,1,1,1,1],
         // 22
         [ 1,1,1,1,1 ,    0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0, 1,1,1,1,1],
         // 23
         [ 1,1,1,1,1 ,    0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0,  1,1,1,1,1],
         //24
         [ 1,1,1,1,1 ,    0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0,  1,1,1,1,1],
         // 25
         [ 1,1,1,1,1 ,    0,0,0,0,1, 1,1,1,1,1, 0,0,0,0,1, 1,1,1,1,1, 0,0,0,0,1, 1,1,1,1,1,  0,0,0,0,0,  1,1,1,1,1],
//⑤
         // 26
         [ 1,1,1,1,1 ,  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0,  1,1,1,1,1],
         // 27
         [ 1,1,1,1,1 ,  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0,  1,1,1,1,1],
         // 28
         [ 1,1,1,1,1 ,  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0,  1,1,1,1,1],
         //29
         [ 1,1,1,1,1 ,  0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0,  1,1,1,1,1],
         // 30
         [ 1,1,1,1,1 ,  0,0,0,0,0, 1,1,1,1,1, 0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,1, 1,1,1,1,1, 0,0,0,0,0,  1,1,1,1,1],
//
         // 31
         [ 1,1,1,1,1 ,  0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0,  1,1,1,1,1],
         // 32
         [ 1,1,1,1,1 ,  0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0,  1,1,1,1,1],
         //33
         [ 1,1,1,1,1 ,  0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0,  1,1,1,1,1],
         // 34
         [1,1,1,1,1,  0,0,0,0,0,   0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0,  1,1,1,1,1],
         // 35
         [1,1,1,1, 1,   1,1,1,1,1, 0,0,0,0,1, 1,1,1,1,1, 0,0,0,0,1,   0,0,0,0,1, 1,1,1,1,1, 0,0,0,0,0, 1,1,1,1,1],
//⑦
         // 36
         [1,1,1,1,1,  0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0,   1,1,1,1,1],
         // 37
         [1,1,1,1,1,  0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0,  0,0,0,0,1, 0,0,0,0,0,   1,1,1,1,1],
//38
         [1,1,1,1,1,  0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0,  0,0,0,0,1, 0,0,0,0,0,   1,1,1,1,1],
         //39
         [1,1,1,1,1,  0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0,   1,1,1,1,1],
         //40
         [1,1,1,1,1,  0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0,  0,0,0,0,1, 0,0,0,0,0,   1,1,1,1,1],












         //33
         [1, 1, 1, 1,1,   1, 1, 1, 1,1,   1, 1 ,1 ,1,1   ,1 ,1 ,1 ,1,1   ,1,1, 1, 1, 1,  1, 1, 1, 1,1  ,1,1, 1 ,1, 1,  1 , 1,1,1,1, 1,1,1,1, 1],
         [1, 1, 1, 1,1,   1, 1, 1, 1,1,   1, 1 ,1 ,1,1   ,1 ,1 ,1 ,1,1   ,1,1, 1, 1, 1,  1, 1, 1, 1,1  ,1,1, 1 ,1, 1,  1 , 1,1,1,1, 1,1,1,1, 1],
         [1, 1, 1, 1,1,   1, 1, 1, 1,1,   1, 1 ,1 ,1,1   ,1 ,1 ,1 ,1,1   ,1,1, 1, 1, 1,  1, 1, 1, 1,1  ,1,1, 1 ,1, 1,  1 , 1,1,1,1, 1,1,1,1, 1],
         [1, 1, 1, 1,1,   1, 1, 1, 1,1,   1, 1 ,1 ,1,1   ,1 ,1 ,1 ,1,1   ,1,1, 1, 1, 1,  1, 1, 1, 1,1  ,1,1, 1 ,1, 1,  1 , 1,1,1,1, 1,1,1,1, 1],
         [1, 1, 1, 1,1,   1, 1, 1, 1,1,   1, 1 ,1 ,1,1   ,1 ,1 ,1 ,1,1   ,1,1, 1, 1, 1,  1, 1, 1, 1,1  ,1,1, 1 ,1, 1,  1 , 1,1,1,1, 1,1,1,1, 1],

       ];




    //動かすもののオブジェクトを作成
    let ball = new Object();
    ball.img = new Image();
    ball.img.src = './img/kaizokusen_24px.png';
    ball.x =47;
    ball.y =47;
    ball.move = 0;
    //タッチのオブジェクトを作成
    let touch = new Object();
    touch.up = false;
    touch.down = false;
    touch.right = false;
    touch.left = false;
    let touch_position = "";

    // //マス目
    const squares = new Image();
    squares.src = "./img/square_white2.png";





    let canvas = document.getElementById('mycanvas');
    if (!canvas || !canvas.getContext) {
      return false;
    }
    const ctx = canvas.getContext('2d');





  function init() {
      const up = document.getElementById('up');
      const right = document.getElementById('right');
      const left = document.getElementById('left');
      const down = document.getElementById('down');
      const num1 = 37;
      const num2 = 38;
      const num3 = 39;
      const num4 = 40;
      //タッチされた時、keydownfunc関数を呼び出す
        left.addEventListener("touchstart", {event:num1,handleEvent:keydownfunc});
        up.addEventListener("touchstart", { event: num2, handleEvent: keydownfunc });
        right.addEventListener("touchstart", { event: num3, handleEvent: keydownfunc });
        down.addEventListener("touchstart", { event: num4, handleEvent: keydownfunc });
        // タッチされた時、keydownfunc関数（かんすう）を呼び出す
        left.addEventListener("touchend", { event: num1, handleEvent: keyupfunc });
        up.addEventListener("touchend", { event: num2, handleEvent: keyupfunc });
        right.addEventListener("touchend", { event: num3, handleEvent: keyupfunc });
        down.addEventListener("touchend", { event: num4, handleEvent: keyupfunc });
      // //マウスが押された時、keydownfunc関数（かんすう）を呼び出す
      //   left.addEventListener("mousedown", {event:num1,handleEvent:keydownfunc});
      //   up.addEventListener("mousedown", { event: num2, handleEvent: keydownfunc });
      //   right.addEventListener("mousedown", { event: num3, handleEvent: keydownfunc });
      //   down.addEventListener("mousedown", { event: num4, handleEvent: keydownfunc });
      //   // マウスが放（はな）された時、keydownfunc関数（かんすう）を呼び出す
      //   left.addEventListener("mouseup", { event: num1, handleEvent: keyupfunc });
      //   up.addEventListener("mouseup", { event: num2, handleEvent: keyupfunc });
      //   right.addEventListener("mouseup", { event: num3, handleEvent: keyupfunc });
      //   down.addEventListener("mouseup", { event: num4, handleEvent: keyupfunc });
        main()
      }

  function main() {
    // 迷路の内部
    for (let x = 0; x < col; x++) {
      for (let y = 0; y < row; y++) {
        if (map[x][y] === 1) {
          drawWall(x , y );
        }
      }
    }
    ctx.drawImage(squares,39.5,41);
    ctx.drawImage(ball.img, ball.x, ball.y);


      //画像を表示
      //マウスが押されている場合は、ボールが移動する
      if (ball.move === 0) {
        if (touch.left === true) {
          let y=Math.round(ball.y/8);
          let x = Math.round(ball.x / 8-1);
          console.log(y,x)
          if(map[y][x]===0){
            ball.move = 32;
            touch_position = 'left';
            x--;
          }
        }
          if (touch.up === true) {
            let y=Math.round(ball.y/8-1);
            let x = Math.round(ball.x / 8);
              console.log(x,y);
              if(map[y][x]===0){
              ball.move = 32;
              touch_position = 'up';
              y++;
            }
          }
          if (touch.right === true) {
            let y=Math.round(ball.y/8);
            let x = Math.round(ball.x/8+2);
              console.log(y, x);
              if(map[y][x]===0){
                ball.move = 32;
              touch_position = 'right';
            x++;
          }
          }

          if (touch.down === true) {
            let y = Math.round(ball.y/8+2);
            let x=Math.round(ball.x/8);
              console.log(y, x);
            if(map[y][x]===0){
              ball.move = 32;
              touch_position = 'down';
              y--;
            }
          }
        }
        // ball.moveが0より大きい場合は、4pxずつ移動を続ける
        if (ball.move > 0) {
          ball.move -= 32;
          if (touch_position === 'left') ball.x -= 4;
          if (touch_position === 'up') ball.y -= 4;
          if (touch_position === 'right') ball.x += 4;
          if (touch_position === 'down') ball.y += 4;
        }
        if((Math.round(ball.y/8)===35 ||Math.round(ball.y/8)===36 )&& (Math.round(ball.x/8+2)===16 ||Math.round(ball.x/8+2)===17||Math.round(ball.x/8+2)===18)){
          window.location.href = './shinkeatariyear.html';
          }
        // ページ移動
          requestAnimationFrame(main);
        }


      function keydownfunc(event) {
        let key_code = this.event;
        if (key_code === 37) touch.left = true;
        if (key_code === 38) touch.up = true;
        if (key_code === 39) touch.right = true;
        if (key_code === 40) touch.down = true;
      }

      //キーボードが放されたときに呼び出される関数
      function keyupfunc(event) {
        let key_code = this.event;
        if (key_code === 37) touch.left = false;
        if (key_code === 38) touch.up = false;
        if (key_code === 39) touch.right = false;
        if (key_code === 40) touch.down = false;
      }


      // Canvasで描画
      // 縦
      const col =45; // 奇数
      // 横
      const row = 45;



    const wallSize = 8;
    // const wallColor = 'blue';
    const wallColor = '#fbfaf9';




    // // // // 上下の壁
    // // for (let x = 0; x < col + 2; x++) {
    //       drawWall(x, 0);
    //       drawWall(x, row + 1);
    //   }

    //   // 左右の壁
    //   for (let y = 0; y < row + 2; y++) {
    //           drawWall(0, y);
    //           drawWall(col + 1, y);
    //     }






    // 壁を描画
    function drawWall(x, y) {
      ctx.fillStyle = wallColor;
        drawRect(y, x);
    }



    function drawRect(x, y) {
        ctx.fillRect(
            x * wallSize,
            y * wallSize,
            wallSize,
            wallSize);

    }

    //ページと依存（いぞん）している全てのデータが読み込まれたら、メインループ開始
    addEventListener('load', init(), false);
})();