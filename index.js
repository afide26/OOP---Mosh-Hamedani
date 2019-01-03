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
Circle.prototype = Object.create(Shape.prototype);
const c = new Circle(2);
const s = new Shape();