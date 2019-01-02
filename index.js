window.onload = function () {
  let docTitle = document.getElementById('doc-title');
  let title = document.getElementById('title');
  let titles = [title, docTitle];
  for (let item of titles) {
    item.innerHTML = 'Abstraction, Inheritance and Polymorphism';
  }
}

//Abstraction - hiding the complexity (e.g. DVD board and push buttons)
// Hide methods and properties to reduce impact of change and reduce complexity of the user interface


//Inheritance - allows programmer to eliminate redundant code. Allows elements to inherit Object properties and methods without starting from scratch.


//Polymorphism - a technique allows programmer to get rid of long if and else and switch case statements.