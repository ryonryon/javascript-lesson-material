var Animal = function() {};

Animal.prototype = {
  walk: function() {
    console.log("toko toko");
  }
};

var Dog = function() {
  // call animal constractor with this instance
  Animal.call(this);
};

Dog.prototype = new Animal();
Dog.prototype.bark = function() {
  console.log("wan wan!");
};

var d = new Dog();

d.walk();
d.bark();
