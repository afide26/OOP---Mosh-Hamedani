//Method Overriding

class Shape {
  move() {
    console.log('Move')
  }
}

//Inherit Shape for the Circle Class
class Circle extends Shape {
  move() {
    //to call the move method from the parent object use super
    super.move();
    console.log('circle move')
  }
}

const c = new Circle('blue', 20);