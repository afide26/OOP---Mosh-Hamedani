//When ot use inheritance

//E.g.
//Object Hierarchy Animal eat() walk()
// Person dog 
// add fish, then the hierarchy is broken, fish can't walk
// Adding inheritance, we need to create to new Animal instances
// Mammals and Fish
// Use composition instead

//Mixins

const canEat = {
  eat: function (hunger = 1) {
    hunger--;
    console.log('eating')
  }
}

const canWalk = {
  walk: function () {
    console.log('walking')
  }
}

const canSwim = {
  swim: function () {
    console.log('Swimming')
  }
}


//Copy or mix-in the properties of the canEat and canWalk objects;
const person = Object.assign({}, canEat, canWalk);

//Copy to Constructor Functions
function Person() {}

function Duck() {}
Object.assign(Person.prototype, canEat, canWalk, canSwim);
Object.assign(Duck.prototype, canEat, canSwim);
const person2 = new Person();
const donald = new Duck();