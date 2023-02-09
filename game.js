// Pixi.js をインポートする
const PIXI = require('pixi.js');

// ゲームの画面サイズ
const width = 800;
const height = 600;

// Pixi.js のアプリケーションを作成する
const app = new PIXI.Application({
  width: width,
  height: height,
  backgroundColor: 0x1099bb
});

// 作成したアプリケーションをHTMLページに追加する
document.body.appendChild(app.view);

// ボールを表すグラフィックスオブジェクトを作成する
const ball = new PIXI.Graphics();
ball.beginFill(0xff0000);
ball.drawCircle(0, 0, 50);
ball.endFill();
ball.x = width / 2;
ball.y = height / 2;

// ボールをゲーム画面に追加する
app.stage.addChild(ball);

// ボールをアニメーションさせるための変数
let xSpeed = 5;
let ySpeed = 5;

// ゲームループを作成する
app.ticker.add(() => {
  // ボールを移動させる
  ball.x += xSpeed;
  ball.y += ySpeed;

  // 画面の端に到達したとき、向きを反転させる
  if (ball.x > width || ball.x < 0) {
    xSpeed = -xSpeed;
  }
  if (ball.y > height || ball.y < 0) {
    ySpeed = -ySpeed;
  }
});
