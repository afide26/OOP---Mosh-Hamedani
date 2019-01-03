//Exercise - Prototypical Inheritance

function extend(Child, Parent) {
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
}

function HtmlElement() {
  this.click = function () {
    console.log('Click')
  }
}

HtmlElement.prototype.focus = function () {
  console.log('Focus')
}

function HtmlSelectElement(...items) {
  this.items = [...items]
  this.render = function () {
    return `<select>\n${this.items.map(item => `<option>${item}</option>`).join('\n')}\n</select>`
  }
  this.addItem = function (item) {
    this.items.push(item)
  };
  this.removeItem = function (itemToRemove) {
    //return this.items = this.items.filter((item) => item !== itemToRemove);
    this.items.splice(this.items.indexOf(itemToRemove), 1)
  };
}


function HtmlImageElement(src) {
  this.src = src;
  this.render = function () {
    return `<img src="${this.src}">`
  }
}
//HtmlSelectElement.prototype = new HtmlElement(); // new HtmlElement() contains click and the HtmlElement.prototype focus method.
//HtmlSelectElement.prototype.constructor = HtmlSelectElement;
extend(HtmlSelectElement, HtmlElement);
// HtmlImageElement.prototype = new HtmlElement();
// HtmlImageElement.prototype.constructor = HtmlImageElement;

extend(HtmlImageElement, HtmlElement);

let elements = [new HtmlSelectElement('a', 'b', 'c', 'd'), new HtmlImageElement('http://select.com.au/image.png')];

elements.forEach((item) => {
  console.log(item.render());
})