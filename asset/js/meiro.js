"use strict";
(function () {

    let map = [
       [1, 1, 1, 1, 1, 1, 1, 1, 1],
       [1, 0, 0, 0, 0, 0, 0, 0, 1],
       [1, 0, 1, 0, 0, 0, 0, 0, 1],
       [1, 0, 1, 0, 0, 0, 1, 0, 1],
       [1, 0, 0, 0, 0, 0, 0, 0, 1],
       [1, 1, 0, 0, 0, 0, 0, 0, 1],
       [1, 0, 0, 1, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1]
      ];
  // let map = [
  //   [0, 0, 0, 0, 0, 1, 0],
  //   [1, 0, 0, 0, 0, 0, 0],
  //   [1, 0, 1, 0, 0, 1, 0],
  //   [0, 1, 0, 1, 0, 0, 0],
  //   [0, 1, 1, 0, 0, 0, 0],
  //   [0, 0, 0, 1, 1, 1, 0],
  //   [0, 0, 1, 0, 0, 0, 0],
  //   ];


    //動かすもののオブジェクトを作成
    let ball = new Object();
    ball.img = new Image();
    ball.img.src = 'img/kaizokusen1.png';
    ball.x =32;
    ball.y =32;
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
    squares.src = "img/squares_mozi_white.png";

    //背景画像
    const background =new Image();
    background.src ="img/back2.png";



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
      //マウスが押された時、keydownfunc関数（かんすう）を呼び出す
        left.addEventListener("mousedown", {event:num1,handleEvent:keydownfunc});
        up.addEventListener("mousedown", { event: num2, handleEvent: keydownfunc });
        right.addEventListener("mousedown", { event: num3, handleEvent: keydownfunc });
        down.addEventListener("mousedown", { event: num4, handleEvent: keydownfunc });
        // マウスが放（はな）された時、keydownfunc関数（かんすう）を呼び出す
        left.addEventListener("mouseup", { event: num1, handleEvent: keyupfunc });
        up.addEventListener("mouseup", { event: num2, handleEvent: keyupfunc });
        right.addEventListener("mouseup", { event: num3, handleEvent: keyupfunc });
        down.addEventListener("mouseup", { event: num4, handleEvent: keyupfunc });
        main()
      }

  function main() {
  // ctx.drawImage(background,200,200);
  ctx.drawImage(squares,32,32);
  ctx.drawImage(ball.img, ball.x, ball.y);
  // 迷路の内部
      for (let x = 0; x < col; x++) {
        for (let y = 0; y < row; y++) {
          if (map[x][y] === 1) {
            drawWall(x , y );
          }
        }
      }


      //画像を表示
      //マウスが押されている場合は、ボールが移動する
      if (ball.move === 0) {
        if (touch.left === true) {
          let x=Math.floor(ball.x/32-1);
          let y=Math.floor(ball.y/32);
          if(map[x][y]===0){
            ball.move = 32;
            touch_position = 'left';
            x--;
          }
        }
          if (touch.up === true) {
            let x=Math.floor(ball.x/32);
            let y=Math.floor(ball.y/32-1);
              if(map[x][y]===0){
              ball.move = 32;
              touch_position = 'up';
              y++;
            }
          }
          if (touch.right === true) {
            let y=Math.floor(ball.y/32);
            let x=Math.floor(ball.x/32+1);
              if(map[x][y]===0){
                ball.move = 32;
              touch_position = 'right';
            x++;
          }
          }

          if (touch.down === true) {
            let x=Math.floor(ball.x/32);
            let y=Math.floor(ball.y/32+1);
            if(map[x][y]===0){
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
        //ページ移動
        // if(ball.x===96 && ball.y===224){
          // window.location.href = 'https://mcs-kutc.com/';
          // }
          requestAnimationFrame(main);
        }


      // window.onload(main())

      function keydownfunc(event) {
        let key_code = this.event;
        if (key_code === 37) touch.left = true;
        if (key_code === 38) touch.up = true;
        if (key_code === 39) touch.right = true;
        if (key_code === 40) touch.down = true;
      }

      //キーボードが放（はな）されたときに呼び出される関数
      function keyupfunc(event) {
        let key_code = this.event;
        if (key_code === 37) touch.left = false;
        if (key_code === 38) touch.up = false;
        if (key_code === 39) touch.right = false;
        if (key_code === 40) touch.down = false;
      }


      // Canvasで描画
      // 縦
      const col = 9; // 奇数
      // 横
      const row = 9;

      //  スタート位置
    let startX = 1;
    let startY = 1;
    //  ゴール位置
    let goalX = col - 6;
    let goalY = row - 2;

    const wallSize = 32;
    const wallColor = 'black';
    // const routeColor = 'blue';
    // スタート位置色

    // canvas.width = col* wallSize;
    // // (行+枠)*壁

    // canvas.height = row * wallSize;

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



        //   // 横線を引く
        // function drawHorizontalLine(x,y) {
    //  ctx.beginPath();
    //  ctx.moveTo(32*(x+1), 32*x);
    //  ctx.lineTo(32*x, 32*x);
    //  ctx.closePath();
    //  ctx.stroke();
    //  };

  //   // 縦線を描画
  //  function drawVerticalLine(x,y) {
  //     ctx.beginPath();
  //     ctx.moveTo(32*(x+1), 32*x);//開始座標を指定する
  //     ctx.lineTo(32*(x+1), 32*(x+1));//座標を指定して線を引く
  //     ctx.closePath();
  //     ctx.stroke();
  //   };


    // 壁を描画
    function drawWall(x, y) {
      ctx.fillStyle = wallColor;
        drawRect(x, y);
    }

    // function drawRoute(x, y) {
    //     ctx.fillStyle = routeColor;
    //     //fillstyle色変える
    //     drawRect(x, y);
    // }

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