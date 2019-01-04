//Inheritance

class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log('Move')
  }
}

//Inherit Shape for the Circle Class

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  draw() {
    console.log('Draw');
  }
}

const c = new Circle('blue', 20);
//** In this implementation, the Circle.prototype.constructor need not be declared. It will automatically have the Circle as constructor */