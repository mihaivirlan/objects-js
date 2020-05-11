    //Object Basics & Literal Notation
// var person = {
//     name: 'Max',
//     age: 27,
//     details: {
//         hobbies: ['Sports', 'Cooking'],
//         location: 'Germany'
//     }
// };
// console.log(person.details.hobbies);

// var person = {
//     name: 'Max',
//     age: 27,
//     details: {
//         hobbies: ['Sports', 'Cooking'],
//         location: 'Germany'
//     },
//     greet: function() {
//         console.log('Hello');
//     }
// };
// person.greet();

// var person = {
//     name: 'Max',
//     age: 27,
//     details: {
//         hobbies: ['Sports', 'Cooking'],
//         location: 'Germany'
//     },
//     greet: function() {
//         console.log('Hello');
//     }
// };
// console.log(typeof person.name);

// var person = {
//     name: 'Max',
//     age: 27,
//     details: {
//         hobbies: ['Sports', 'Cooking'],
//         location: 'Germany'
//     },
//     greet: function() {
//         console.log('Hello');
//     }
// };
// console.log(typeof person.age);

// var person = {
//     "first-name": 'Max',
//     "age": 27,
//     details: {
//         hobbies: ['Sports', 'Cooking'],
//         location: 'Germany'
//     },
//     greet: function() {
//         console.log('Hello');
//     }
// };
// console.log(person['first-name']);



    //Properties & "this"
// var person = {
//     name: 'Max',
//     age: 27,
//     details: {
//         hobbies: ['Sports', 'Cooking'],
//         location: 'Germany'
//     },
//     greet: function() {
//         console.log('Hello');
//     }
// };
// person.name = 'Anna';
// console.log(person);

// var age = 30;
// var person = {
//     name: 'Max',
//     age: 27,
//     details: {
//         hobbies: ['Sports', 'Cooking'],
//         location: 'Germany'
//     },
//     greet: function() {
//         console.log('Hello, I am ' + age + ' years old');
//     }
// };
// person.greet();

// var age = 30;
// var person = {
//     name: 'Max',
//     age: 27,
//     details: {
//         hobbies: ['Sports', 'Cooking'],
//         location: 'Germany'
//     },
//     greet: function() {
//         console.log('Hello, I am ' + this.age + ' years old');
//     }
// };
// person.greet();



    //Alternative Way of Creating Objects: Using the Object Constructor
// var age = 30;
// var person = {
//     name: 'Max',
//     age: 27,
// };
// var anotherPerson = new Object();
// anotherPerson.name = 'Anna';
// anotherPerson.age = '30';
// console.log(anotherPerson);



    //Objects are Reference Types (Refresher)
// var age = 30;
// var person = {
//     name: 'Max',
//     age: 27,
// };
// var anotherPerson = new Object();
// anotherPerson.name = 'Max';
// anotherPerson.age = '27';
// console.log(anotherPerson == person);

// var age = 30;
// var person = {
//     name: 'Max',
//     age: 27,
// };
// var person1 = {
//     name: 'Max',
//     age: 27,
// };
// var anotherPerson = new Object();
// anotherPerson.name = 'Max';
// anotherPerson.age = '27';
// console.log(person1 == person);



    //Object.create()
// var age = 30;
// var person = {
//     name: 'Max',
//     age: 27,
// };
// var anotherPerson = Object.create(null);
// anotherPerson.name = 'Anna';
// console.log(anotherPerson);

// var age = 30;
// var person = {
//     name: 'Max',
//     age: 27,
// };
// var anotherPerson = Object.create(null);
// anotherPerson.name = 'Anna';
// console.log(anotherPerson);
// //Each object we create as a object above has a prototype, default object prototype: Object.prototype - which it's a root prototype of all objects

// var age = 30;
// var person = {
//     name: 'Max',
//     age: 27,
// };
// var anotherPerson = Object.create(person);
// anotherPerson.name = 'Anna';
// console.log(anotherPerson.age);



    //Prototypes Introduction
    //All objects in js have by default a prototype which is: Objects.prototype
// var age = 30;
// var person = {
//     name: 'Max',
//     age: 27,
// };
// console.log(person.__proto__);

// var age = 30;
// var person = {
//     name: 'Max',
//     age: 27,
// };
// console.log(person.toString());

// var age = 30;
// var person = {
//     name: 'Max',
//     age: 27,
// };
// Object.prototype.greet = function() {
//     console.log('Hello there');
// };
// person.greet();



    //Prototypes in Action
// var age = 30;
// var person = {
//     name: 'Max',
//     age: 27,
// };
// Object.prototype.greet = function() {
//     console.log('Hello there');
// };
// var max = Object.create(person)
// console.log(max.name);

// var age = 30;
// var person = {
//     name: 'Max',
//     age: 27,
// };
// Object.prototype.greet = function() {
//     console.log('Hello there');
// };
// var max = Object.create(person)
// max.greet();

// var age = 30;
// var person = {
//     name: 'Max',
//     age: 27,
// };
// Object.prototype.greet = function() {
//     console.log('Hello there');
// };
// var max = Object.create(person);
// var anna = Object.create(person);
// max.greet();
// anna.greet();

// var age = 30;
// var person = {
//     name: 'Max',
//     age: 27,
// };
// Object.prototype.greet = function() {
//     console.log('Hello there, I am ' + this.name + '!');
// };
// var max = Object.create(person);
// var anna = Object.create(person);
// anna.name = 'Anna';
// max.greet();
// anna.greet();

// var age = 30;
// var person = {
//     name: 'Max',
//     age: 27,
// };
// Object.prototype.greet = function() {
//     console.log('Hello there, I am ' + this.name + '!');
// };
// var max = Object.create(person);
// var anna = Object.create(person);
// anna.name = 'Anna';
// max.greet();
// anna.greet();



    //Constructor Functions
// function Person() {

// }
// var person = new Person();
// person.name = 'Max';
// console.log(person.__proto__ == Person.prototype);

// function Person() {

// }
// Person.prototype.greet = function() {
//     console.log('Hello');
// }
// var person = new Person();
// person.name = 'Max';
// person.greet();

// function Person() {
//     this.name = 'Max';
// }
// Person.prototype.greet = function() {
//     console.log('Hello');
// }
// var person = new Person();
// console.log(person.name);

// function Person() {
//     this.name = 'Max';
//     this.greet = function() {
//         console.log('Hello, I am ' + this.name);
//     }
// }
// Person.prototype.greet = function() {
//     console.log('Hello');
// }
// var person = new Person();
// person.greet();

// function Person() {
//     this.name = 'Max';
//     this.greet = function() {
//         console.log('Hello, I am ' + this.name);
//     }
// }
// Person.prototype.greet = function() {
//     console.log('Hello');
// }
// var person = new Person();
// person.name = 'Anna';
// person.greet();

// function Person() {
//     this.name = 'Max';
//     this.greet = function() {
//         console.log('Hello, I am ' + this.name);
//     }
// }
// Person.prototype.greet = function() {
//     console.log('Hello');
// }
// var person = new Person();
// person.name = 'Anna';
// var anotherPerson = new Person();
// person.greet();
// anotherPerson.greet();

// function Person() {
//     this.name = 'Max';
//     this.greet = function() {
//         console.log('Hello, I am ' + this.name);
//     }
// }
// Person.prototype.greet = function() {
//     console.log('Hello');
// }
// var person = new Person();
// person.name = 'Anna';
// var anotherPerson = new Person();
// person.greet();
// anotherPerson.greet();



    //Constructor Functions & Arguments
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// var person = new Person('Max', 27);
// console.log(person);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// var max = new Person('Max', 27);
// var anna = new Person('Anna', 30)
// console.log(max);
// console.log(anna);



