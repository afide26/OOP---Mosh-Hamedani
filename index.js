//Implementing Abstraction
//Hide the details; only show the essentials

function Circle(radius) {
  this.radius = radius;
  //Implementation details are stored in local variables and not assigned to this;
  let defaultLocation = {
    x: 0,
    y: 0
  };
  let computeOptimumLocation = function (location) {
    return radius * location;
  };
  this.draw = function () {
    let location = computeOptimumLocation(0.5);
    console.log('Optimum location * radius', location);
  };
}

const circle = new Circle(10);
circle.draw();

//Closures - inner functions having access to internal local variables and local variables of parent functions.
//access members using this... and variables directly.