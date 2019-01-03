//Creating your own prototypical inheritance

function Shape() {

}
Shape.prototype.duplicate = function () {
  console.log('duplicate');
}

function Circle(radius) {
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
// Circle.prototype.constructor = Circle;
const c = new Circle(2);
const s = new Shape();