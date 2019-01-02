//Object Literals '{}'- Creating Objects
//Collection of key:value pairs
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw() {
    console.log('draw')
  }
};

//circle has 3 members radius, location, draw.
// draw is a method - defines some logic
// radius and location are properties - store values

circle.draw();