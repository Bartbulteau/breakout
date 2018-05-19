function Ball (p) {
    this.x = canvasWidth/2;
    this.y = canvasHeight - ballSize;
    this.xspeed = 4;
    this.yspeed = 4;

    this.diameter = ballSize;

    this.show = function () {
        p.fill(255);
        p.arc(this.x, this.y, this.diameter, this.diameter, 0, 2*p.PI); 
    }

    this.update = function () {
        this.show();
    }

    this.move = function () {
        this.x += this.xspeed;
        this.y += -this.yspeed;

        if ((this.x + (this.diameter/2)) > canvasWidth) { // right
            this.xspeed = -this.xspeed;
        }
        if ((this.y - (this.diameter/2)) < 0) { // top
            this.yspeed = -this.yspeed;
        }
        if ((this.x - (this.diameter/2)) < 0) { // left
            this.xspeed = -this.xspeed;
        }
        if ((this.y + (this.diameter/2)) > canvasHeight) { // bottom (game over)
            p.noLoop();
            var gameover = document.getElementById("gameover");
            gameover.innerHTML = "Game Over !";
        }
    }
    
    this.bounce = function () {
        // this.xspeed = -this.xspeed;
        this.yspeed = -this.yspeed;
    }
}