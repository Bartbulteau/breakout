function Paddle (p) {
    this.width = 80;
    this.height = 20;

    this.speed = 10;

    this.x = canvasWidth/2 - (this.width / 2);
    this.y = canvasHeight - (this.height / 2);

    this.show = function () {
        p.fill(255);
        p.rect(this.x, this.y, this.width, this.height);
    }

    this.update = function () {
        this.show();
    }

    this.move = function () {
        if(p.keyIsDown(p.LEFT_ARROW)) {
            if (this.x > 0) {
                this.x += -this.speed;
            }
        }
        else if (p.keyIsDown(p.RIGHT_ARROW)) {
            if (this.x < (canvasWidth - this.width)) {
                this.x += this.speed;
            }
        }
    }
}