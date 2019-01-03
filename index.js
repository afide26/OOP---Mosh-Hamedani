//Lesson Property Descriptors


//Property descriptors

//Prototype vs Instance Members



function Circle(radius) {
  //Instance member
  this.radius = radius;
}

//Transfer the draw method in the prototype of Circle to avoid duplication in memory

//Prototype member
Circle.prototype.draw = function () {
  console.log('Draw')
}
const c1 = new Circle(1);
const c2 = new Circle(10);

//Existing methods of prototype can also be overriden

Circle.prototype.toString = function () {
  console.log(`Circle with a radius of ${this.radius}`);
}