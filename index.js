//The this keyword
'use strict' //call a method as a function draw() will not point to window or global
const Circle = function () {
  this.draw = function () {
    console.log(this)
  }
}

const c = new Circle();
//Method call
c.draw();

const draw = c.draw;
console.log(draw);

//Function call
draw() // since there is no 'this' keyword, the window object will be the object where the draw method is called.