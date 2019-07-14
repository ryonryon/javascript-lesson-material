var Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

// instance property
Member.prototype.sex = "male";

// instance method
Member.prototype.getName = function() {
  return this.firstName + " " + this.lastName;
};

// static property
Member.version = "1.0";

// static method
Member.getVersion = function() {
  return Member.version;
};

var mem1 = new Member("ryo", "togashi");
var mem2 = new Member("rei", "togashi");

console.log(mem1.getName() + "|" + mem2.getName());

mem2.lastName = undefined;

console.log(mem1.getName() + "|" + mem2.getName());
