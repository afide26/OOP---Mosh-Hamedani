//Abstraction
//Hide the details; only show the essentials

function Circle(radius) {
  this.radius = radius;
  //Implementation details are stored in local variables and not assigned to this;
  let defaultLocation = {
    x: 0,
    y: 0
  };
  let computeOptimumLocation = function () {
    //...
  };
  this.draw = function () {
    computeOptimumLocation();
    console.log('draw');
  };
}

const circle = new Circle(10);

//Closures - inner functions having access to internal local variables and local variables of parent functions.