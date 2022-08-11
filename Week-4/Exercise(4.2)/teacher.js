let Person = function () { };

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
}


class Teacher extends Person {
  constructor(name) {
    super(name)
  }
  teach(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
  }
}


let him = new Teacher();

him.initialize('Adam', 45);
him.teach('inheritance')