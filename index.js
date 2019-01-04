//ES6 - Private Properties Using Symbols
//Abstraction - hiding the complexities
// Using private methods

// class Circle {
//   constructor(radius) {
//     //this.radius is public by default;
//     //Convention _radius assumes the _radius is private but it is not.
//     this._radius = radius;
//   }
// }

// const c = new Circle(1);

//Primitive Type: Symbol - a unique identifier;
const _radius = Symbol();
const _draw = Symbol();
class Circle {
  constructor(radius) {
    //_radius is a new Symbol
    this[_radius] = radius;
  }
  //Computed value [_draw] once evaluated assigns the name of the property or method
  [_draw]() {
    console.log('Draw')
  }
}

const c = new Circle(1);