//Functions are Objects
//Collection of key:value pairs


//Constructor - Pascal casing and new keyword

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('Constructor draw');
  }
  return this;
}

const another = new Circle(1);
another.draw();

const circleApply = Circle.apply({}, [1]);
const circleCall = Circle.call({}, [1]);
console.log(circleApply.draw());
console.log(circleCall.draw());