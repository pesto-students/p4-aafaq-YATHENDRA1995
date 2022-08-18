// Approach 1

// let Person = function () { };
// Person.prototype.initialize = function (name, age) {
//   this.name = name;
//   this.age = age;
// }

// class Teacher extends Person {
//   constructor(name) {
//     super(name)
//   }
//   teach(subject) {
//     console.log(`${this.name} is now teaching ${subject}`);
//   }
// }

// let him = new Teacher();
// him.initialize('Adam', 45);
// him.teach('inheritance')


// Approach 2
var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

var Teacher = function () {};
Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function (subject) {
  this.subject = subject;
  console.log(`${this.name} is now teaching ${this.subject}`);
};

var him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");