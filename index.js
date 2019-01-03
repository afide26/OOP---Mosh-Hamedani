//When ot use inheritance

//E.g.
//Object Hierarchy Animal eat() walk()
// Person dog 
// add fish, then the hierarchy is broken, fish can't walk
// Adding inheritance, we need to create to new Animal instances
// Mammals and Fish
// Use composition instead

//Mixins - use this mixin instead of using Object.assign directly
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}
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


//Copy properties of the canEat and canWalk objects;
// const person = Object.assign({}, canEat, canWalk); - Long method
const person = mixin({}, canEat, canWalk); //Refactored as mixin
//Copy to Constructor Functions
function Person() {}

function Duck() {}
//Refactor Object.assign into a mixin
// Object.assign(Person.prototype, canEat, canWalk, canSwim); - Long method
mixin(Person.prototype, canEat, canWalk, canSwim)
// Object.assign(Duck.prototype, canEat, canSwim);
mixin(Duck.prototype, canEat, canWalk, canSwim);
const person2 = new Person();
const donald = new Duck();