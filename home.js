//console.log("Hello");
//console.log("hey");
// alert("yoooo");

// Variables

let b = "smoothie";
//console.log(b);

let someNumber = 45;
//console.log(someNumber);

// Manipulation DOM with Javascript

//let askAge = prompt("What is your age?");
//document.getElementById("main").innerHTML = askAge;

// Numbers in JS

let num1 = 10;
num1++;
num1--;
//console.log(num1);

//console.log(num1 % 6);

/* FUncions
1. create a function
2. call a function
*/

function fun() {
  console.log("this is a function");
}
fun();

/* Create a funciton that takes in a name and returns a message of hello follow by a name 
EX: 
Name: "Juan"
Return: "Hellow juan"
*/

function greeting() {
  let result = "Hello" + " " + name; // String concatenation
  console.log(result);
}

//let name = prompt("What is your name?");
//greeting(name);

// how do arguments works in funciton?
// how do we add two numbers together in a function

function sumNum(num1, num2) {
  var result = num1 + num2;
  //console.log(result);
}

sumNum(12, 13);

/* While loops
let num = 0;
while (num < 100) {
  num += 1;
  console.log(num);
}
*/

//For loop

for (let num1 = 0; num1 < 100; num1++) {
  console.log(num1);
}

//Data types
let yourAge = 18; //number
let yourName = "Juan"; //string
let name = { first: "Juan", last: "Really Doe" }; // object
let truth = false; //bolean
let groceries = ["apple", "banana", "orange"]; // array
let random; //undefined
let nothiing = null; //value of null

// Strings in Javascript (common methods)
let fruit = "banana, apple, orange, blackberry";
let moreFruits = "banana\napple"; // new line with \n
console.log(fruit.indexOf("q"));
console.log(fruit.slice(2, 6));
console.log(fruit.replace("ba", "ana"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.split(",")); // split by a comma

//Array

let fruits = ["apple", "banana", "pineapple", "orange"];

console.log(fruits[3]);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Arrays common methods

console.log(fruits.join(" * "));
console.log(fruits.pop(), fruits); // removes last items
console.log(fruits.push("blackberriesssss"), fruits); // appends (adds)

let vegetables = ["tomatoe", "pepper", "brocoli", "asparagus"];
let allGroceries = fruits.concat(vegetables); // add two or more arrays together
console.log(allGroceries);

//very common array sample

let emptyArray = [];

for (let num = 0; num < 10; num++) {
  emptyArray.push(num);
}
console.log(emptyArray);

//objects in javascript

let student = { 
  first: "Juan", 
  last: "Kenobi",
  age: "31",
  height: "165", 
  studentInfo: function (){
    return this.first + '\n' + this.last + '\n' + this.age; //object oriented progamming
  }
};

//console.log(student.first);
//console.log(student.last);
//student.first = 'Ramone'; // use to change value
//console.log(student.first);
student.age++; //use to increment a number
console.log(student.age);

console.log(student.studentInfo());

// Conditionals, control flows (if else)
// 18-35 is my taget audience
// && AND
// || OR

let age = prompt('what is your age again? ');

if ( (age >=18 ) && (age <=35) ) {
  status = 'target demo';
  console.log(status);
}
else {
  status = 'no target demo';
  console.log(status);
}


// Switch statements
// differeniate between weekday vs weekend
// 0 Sunday
// Day 6 is Saturday

switch (3){
  case 0:
      text = 'weekend';
      break;
  case 5:
      text = 'weekend';
      break;
  case 6:
      text = 'weekend';
      break;
  default:
      text = 'weekday';
}



