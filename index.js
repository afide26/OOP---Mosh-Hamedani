//Lesson Inheritance and Multiple Level Inheritance

//Notes:
// Classical Inheritance for languages with Classes. JS does not have classes;
// Base/Super/Parent Class e.g. Shape
// Derived/Sub/Child Class e.g. Square, Circle
// Relationship IS-A: Square is a Shape, Circle is a Shape

//Prototypical Inheritance
//Parent of another object = Prototype; (parent) or ObjectBase or Template;
let x = {} // Will have a __proto__ or Prototype of Object;
let y = {} // Will have a __proto__ or Prototype of Object;
//Use the Object.getPrototypeOf() method;

Object.getPrototypeOf(x) === Object.getPrototypeOf(y);
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));

//Inherit a method from the Proto or Prototypical inheritance;
console.log(x.toString());


//Multi-level inheritance;

function Circle() {
  this.radius = 1;
  this.draw = function () {
    console.log('draw');
  }
}

const circle = new Circle();