class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  getName() {
    return this.lastName + this.firstName;
  }
}

let m = new Member("ryo", "togashi");
console.log(m.getName());

class Area {
  static getTringle(base, height) {
    return (base * height) / 2;
  }
}
console.log(Area.getTringle(10, 5));
