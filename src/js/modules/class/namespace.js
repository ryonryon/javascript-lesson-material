var Wings = Wings || {};

Wings.Member = function(fistname, lastname) {
  this.fistname = firstname;
  this.lastname = lastname;
};

Wings.Member.prototype = {
  getName: function() {
    return this.firstname + " " + this.lastname;
  }
};

var mem = new Wings.Member("ryo", "togashi");
console.log(mem.getName());
