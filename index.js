//Factories and Constructors
//Collection of key:value pairs

//Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('Factories draw')
    }
  }
}

const circ1 = createCircle(2);
circ1.draw();

//Constructor - Pascal casing and new keyword

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('Constructor draw');
  }
}

const circ2 = new Circle(2);
circ2.draw();