//ES6 - the this keyword in ES6 Classes
//ES6 classes are by default run in 'strict mode' modifying the global object;

class Circle {
  //Instance method - not part of a constructor
  draw() {
    console.log(this)
  }
}

const c = new Circle()
const draw = c.draw;
draw(); //returns undefined as the draw method is not attached to a specific object.