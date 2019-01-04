//ES6 - Private Properties Using WeakMaps

//Indicate radius as a private property

const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  //ES6 getter
  get radius() {
    return _radius.get(this);
  }

  //ES6 Setter
  set radius(value) {
    if (typeof value !== 'number' || value <= 0) throw new Error('invalid radius');
    _radius.set(this, value)
  }
}

const c = new Circle(1);