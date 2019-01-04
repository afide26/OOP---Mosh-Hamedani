//Static Methods

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  //Instance Method
  draw() {
    console.log('Draw');
  }

  //Static method - will not show in proto
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = Circle.parse('{"radius":2}')
console.log(circle);