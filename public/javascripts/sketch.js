var ball;
var paddle;
var ballSize = 20;
var canvasWidth = 600;
var canvasHeight = 400;
var bricks = [];
var score = 0;
var scoreHTML = document.getElementById("score");
var placements = [
    280, 95,
    230, 95,
    180, 95,
    130, 95,
    330, 95,
    380, 95,
    430, 95,

    280, 130,
    230, 130,
    180, 130,
    130, 130,
    330, 130,
    380, 130,
    430, 130,

    280, 170,
    230, 170,
    180, 170,
    130, 170,
    330, 170,
    380, 170,
    430, 170,

    280, 210,
    230, 210,
    180, 210,
    130, 210,
    330, 210,
    380, 210,
    430, 210
];

var sketch = function(p) {

    p.setup = function() {
        p.createCanvas(canvasWidth, canvasHeight);
        ball = new Ball(p);
        paddle = new Paddle(p);
        var j = 0;
        for (var i = 0; i < 28; i++) {
            bricks.push(new Brick(p));
            bricks[i].setXY(placements[j], placements[++j]);
            j++;
        }
    }
    
    p.draw = function() {
        p.background(51);
        paddle.move();
        ball.move();
        ball.show();
        paddle.show();
        for (var i in bricks) {
            bricks[i].update();
        }
        this.checkCollision();
        if (bricks.length === 0) {
            this.won();
        }
        scoreHTML.innerHTML = "Score : " + score.toString();
    }

    this.checkCollision = function () {
        if (p.collideRectCircle(paddle.x, paddle.y, paddle.width, paddle.height, ball.x, ball.y, ball.diameter, ball.diameter)) {
            ball.bounce();
        }
        for (var i in bricks) {
            if (p.collideRectCircle(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height, ball.x, ball.y, ball.diameter, ball.diameter)) {
                bricks.splice(i, 1);
                score+=10;
                ball.bounce();
            }
        }
    }

    this.won = function() {
        alert('You won !');
        p.noLoop();
    }


    this.resetSketch = function() {
        p.clear();
        p.setup();
    }
};

new p5(sketch, window.document.getElementById('container'));