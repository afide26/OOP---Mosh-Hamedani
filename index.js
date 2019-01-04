//Function Declaration
sayHello();
//hoisted on top and can be called before it is written
function sayHello() {
  console.log('Hello')
}

//Function Expression
//Is not hoisted and cannot be called unless initialized.
const sayGoodbye = function () {};

//Classes can be defined in two ways
//Class Declaration
//Not hoisted to the top
class Circle {}

//Class Expression
//Not hoisted to the top
const Square = class {}