//Method Overriding 
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
  Shape.prototype.duplicate.call(this);
  console.log('Duplicate Circle')
}
const c = new Circle()