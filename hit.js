class Hitter extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("polygons.png");
  }

  display() {
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    super.display();
  }
}
