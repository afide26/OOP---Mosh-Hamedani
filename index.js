//Iterating Properties

function Circle(radius) {
  //Instance member
  this.radius = radius;
  this.move = function () {
    console.log('move');
  }
}

//Transfer the draw method in the prototype of Circle to avoid duplication in memory

//Prototype member
Circle.prototype.draw = function () {
  console.log('Draw')
}
const c1 = new Circle(1);
const c2 = new Circle(10);

//Iterating Object.keys only returns instance members - methods and properties inside the function

console.log(Object.keys(c2));

//How about for in loop? For in loop returns instance and members
for (let key in c1) console.log(key);