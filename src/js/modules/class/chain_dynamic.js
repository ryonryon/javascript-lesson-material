var Animal = function() {};

Animal.prototype = {
  walk: function() {
    console.log("toko toko");
  }
};

var SuperAnimal = function() {};
SuperAnimal.prototype = {
  walk: function() {
    console.log("dada dada dada");
  }
};

var Dog = function() {};
Dog.prototype = new Animal();

var d1 = new Dog();
d1.walk();

Dog.prototype = new SuperAnimal();

var d2 = new SuperAnimal();
d2.walk();
d1.walk();
