//Calling the Super Constructor
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

//Use the function to apply the encapsulated logic;
extend(Circle, Shape);
extend(Square, Shape)

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

//Refactor the protoype inheritance
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;



//Create a new Constructor function called Square with a size parameter

function Square(size, color) {
  Shape.call(this, color)
  this.size = size;
}

// Refactor the prototype inheritance
// Square.prototype = Object.create(Shape.prototype);
// Shape.prototype.constructor = Square;

const sq = new Square(10, 'blue');
const c = new Circle(2, 'red');
const s = new Shape();