//Avoid Extending Built-in Objects
//Don't modify objects you don't own

Array.prototype.shuffle = function () {
  console.log('Extended shuffle');
}

const arr1 = [];
arr1.shuffle();