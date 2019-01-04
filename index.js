//ES6 Classes
// the code below is the same as the constructor method for objects
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function () {
      console.log('move')
    }
  }

  draw() {
    console.log('draw')
  }
}

const c = new Circle(2);