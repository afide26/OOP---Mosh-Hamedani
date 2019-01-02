window.onload = function () {
  let docTitle = document.getElementById('doc-title');
  let title = document.getElementById('title');
  let titles = [title, docTitle];
  for (let item of titles) {
    item.innerHTML = 'Encapsulation';
  }
}

//Procedural Programming Example
//Variables are outside the function
let baseSalary = 30000;
let overtime = 10;
let rate = 20;


function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate)
}
console.log('Procedural Programming: ', getWage(baseSalary, overtime, rate));

//OOP Style

let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + (this.overtime * this.rate);
  }
}

console.log('OOP: ', employee.getWage())

//"The best functions are those with no parameters"