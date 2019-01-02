//Adding and removing properties


function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

const circle = new Circle(10);
circle.location = {
  x: 1
};

circle['location'] = {
  x: 2
}

delete circle.location;