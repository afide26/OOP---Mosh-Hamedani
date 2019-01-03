//Calling the Super Constructor

function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = function () {
  console.log('duplicate');
}

function Circle(radius, color) {
  //How to call the super constructor
  //Using apply, the new instance of Shape is called and passed the parameter 'red'
  Shape.call(this, color)
  this.radius = radius;
}

//Create a new object that inherits the prototype of shape;

Circle.prototype.draw = function () {
  console.log('draw')
}

//Resetting the prototype needs to come before the constructor declaration
//The statement below changes the constructor member of prototype
Circle.prototype = Object.create(Shape.prototype);

//To solve this we need to override the Shape constructor of circle with the Circle constructor;
Circle.prototype.constructor = Circle;
const c = new Circle(2, 'red');
const s = new Shape();