//Enumerating properties in an object


function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

const circle = new Circle(10);

//Enumerate keys or values 'for in' loop
for (let key in circle) {
  //get the ones that are not functions
  if (typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}
//Get all keys Object.keys
const keys = Object.keys(circle);
console.log('Keys', keys);

circle.location = {
  x: 1,
  y: 2
}
// Find if a property is in an object using the 'in' method
let prop = 'location';

if (prop in circle) {
  console.log(`Yes ${prop} is a property of circle`)
} else {
  console.log(`${prop} is not a property of circle.`)
}