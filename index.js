//ES6 - Private Properties Using WeakMaps

//Indicate radius as a private property

const _radius = new WeakMap();
const _move = new WeakMap();
class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    //set a private method
    _move.set(this, () => {
      console.log('move', this);
    })
  }

  //To access the weakmap with a public method
  draw() {
    _move.get(this)();
    console.log('draw')
  }
}

const c = new Circle(1);