function Brick (p) {
    this.x = 0;
    this.y = 0;

    this.width = 40;
    this.height = 20;

    this.colors = ['red', 'blue', 'green', 'pink', 'purple', 'brown'];
    this.color = '';

    this.setXY = function (x, y) {
        this.x = x;
        this.y = y;
        this.color = p.random(this.colors);
    }
    this.show = function () {
        p.fill(this.color);
        p.rect(this.x, this.y, this.width, this.height);
    }

    this.update = function () {
        this.show();
    }

}