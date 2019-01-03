//Polymorphism

// This lesson shows the multiple forms of duplicate. 
// Same method name but different implementations
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {

}

Shape.prototype.duplicate = function () {
  console.log('Duplicate')
}

function Circle() {

}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  //to call the duplicate method from shape, use call
  //Shape.prototype.duplicate.call(this);
  console.log('Duplicate Circle')
}


function Square() {

}
extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log('Duplicate Square')
}

//To test the power of polymorphism, see the examples below

const shapes = [new Circle(), new Square()];

//Iterate the shapes array using for of

for (let shape of shapes)
  shape.duplicate();