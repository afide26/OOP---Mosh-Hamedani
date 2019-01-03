//Exercise - Prototypical Inheritance

function HtmlElement() {
  this.click = function () {
    console.log('Click')
  }
}

HtmlElement.prototype.focus = function () {
  console.log('Focus')
}



function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item)
  };
  this.removeItem = function (itemToRemove) {
    //return this.items = this.items.filter((item) => item !== itemToRemove);
    this.items.splice(this.items.indexOf(itemToRemove), 1)
  };
}
HtmlSelectElement.prototype = new HtmlElement(); // new HtmlElement() contains click and the HtmlElement.prototype focus method.
HtmlSelectElement.prototype.constructor = HtmlSelectElement;