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

var age = 30;
var person = {
    name: 'Max',
    age: 27,
};
var anotherPerson = Object.create(person);
anotherPerson.name = 'Anna';
console.log(anotherPerson.age);