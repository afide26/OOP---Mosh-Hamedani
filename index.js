//Primitive and reference types

//Primitive values
let x = 10;
let y = x; //The first value of x is copied to y

x = 20; //x is now assigned a new value but y's value is unchanged since it copied the old value of x

//Reference types
let a = {
  value: 10
}; //the object is stored in memory
let b = a; //the address of the object in memory is assigned to b; not the value

a.value = 100;
//a and b will have the same value.


//Another primitive example

let number = 10;

function increase(number) {
  number++
}

increase(number); //will not change let number
console.log(number); //still copies the value of number variable not the one in the argument of increase(number);

//Another Reference type

let obj = {
  value: 10
}

function increaseObj(obj) {
  obj.value++
}
increaseObj(obj); //Call the function
console.log(obj.value); //Change reflected in value