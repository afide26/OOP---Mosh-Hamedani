//Implementing Abstraction
//Hide the details; only show the essentials

function Circle(radius) {
  this.radius = radius;
  //Implementation details are stored in local variables and not assigned to this;
  //Private members are assigned to let;
  let defaultLocation = {
    x: 0,
    y: 0
  };

  this.getDefaultLocation = function () {
    return defaultLocation;
  }
  this.draw = function () {
    console.log('Optimum location * radius', location);
  };

  //Add a getter method to get the default location without a function call;
  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation
    },
    set: function (value) {
      if (!value.x || !value.y)
        throw new Error('Invalid location')
      return defaultLocation = value;
    }
  })
}

const circle = new Circle(10);
circle.defaultLocation = {
  x: 10,
  y: 11
};
//Getting default location using a method
console.log('Method-', circle.getDefaultLocation());

//Getting default location as a defined property

console.log('Defined property-', circle.defaultLocation);


//Closures - inner functions having access to internal local variables and local variables of parent functions.
//access members using this... and variables directly.