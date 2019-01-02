//Lesson Property Descriptors


//Property descriptors

let person = {
  name: 'Mosh'
}
// console.log(person)

// for (let key in person)
//   console.log(key);


// console.log('keys', Object.keys(person))
let objectBase = Object.getPrototypeOf(person);
console.log('objectBase', objectBase);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log('descriptor', descriptor);

//Pass property descriptor using defineProperty
Object.defineProperty(person, 'name', {
  writable: true, //writable, enumerable, get and set are property descriptors
  enumerable: false,
  configurable: true // if true the item can be deleted.
});

delete person;
person.name = 'Alan';

console.log(person); //changes to name property dependent on writable property descriptor;
console.log(Object.keys(person)); //depends on proeprty enumerable