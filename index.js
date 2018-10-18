//Level 0 print variable----------------------------
var numberA = 10;
let numberB = 99;
const numberC = 0.02;

console.log(numberA);
console.log("-------------------------------");
//Level 1 Operator Math------------------------------

let a = 2 + 2;

let b = 3 - 2;

let c = 3 * 3;

let d = 4 / 2;

let e = 7 % 2; // result:1

let f = 2 - (3 * 2) / 3 + 1; // result:7

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log("------------------------");

//Level 2 ------------------------------------

let bool = true;
let str = "I'm String";
let numb = 1000;

console.log(str);
console.log(bool);
console.log(numb);
console.log("------------------------------");

//Level 3 ---------------------------------

// let arr = [10,12,42,23,50];
let arr1 = ["a", "b", "c", "d"];

// let result = arr1.toString(arr1);
// console.log(result);

// let result = arr.join("_");
// console.log(result);

// let result = arr1.length();
// console.log(result);

// let result = arr1.includes("a");
// console.log(result);

// let result = arr1.push("e");
// console.log(result);

const list = ["a", "b", "c", "d"];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
  // console.log(i)
}

// let result = arr1.pop("d");
// console.log(result);
console.log("------------------------------");

//Level 4---------------------------------
const sentenceA = "Hello World";
const sentenceB = "Good Bye";

console.log(sentenceA);
console.log(sentenceB);

let paragA = "Yavidz";

console.log(paragA + " Iqbal");
console.log("------------------------------");

//Level 5----------------------------------

const sentenceC = sentenceA + " " + sentenceB;

console.log(sentenceC);

const sentenceD = `${sentenceA} ${sentenceB}`;

console.log(sentenceD);
console.log("------------------------------");

//Level 6---------------------------------
var fruit = ["Banana", "Apple", "Pear"];

var fruit2 = fruit.push("Grape");
console.log(fruit2);
console.log(fruit);
console.log("----------------------------------------");
//Level 7-------------------------------------
let txt2 = "hello goodness";

let newstr = txt2.replace(/hello goodness/i, "Hello Godness");

console.log(newstr);
console.log("--------------------------------------");

let number = 7;
let number2 = 14;

// let results = (number == number2);
let results = number >= number2;

console.log(results);
console.log("---------------------------------------");

//level 8-----------------------------------------------
// let y = 0;
// if (y == 2) {
//     alert("This is true number " +y);
// } else {
//     alert("this is false number " +y)
// }
// console.log("if,else")
console.log("---------------------------------");
//Level 9---------------------------------------------
let x = 30;
if (x >= 25) {
  console.log("This is lower than X");
} else if (x >= 10) {
  console.log("This is bigger than X");
} else {
  console.log("Wrong");
}
console.log("-----------------------------------");
//Level 10--------------------------------------
x = 42;
const yes = x == 42 ? true : false;

console.log(yes);
console.log("---------------------------------");

//level 11----------------------------------------
const ternary = 23;

//Level 12--------------------------------------

var candyPrice = 10000;
var clothPrice = 200000;
var money = 300000;

function buySomething(price1, price2, money) {
  if (price1 <= money && money > clothPrice) {
    console.log("buy candy and cloth");
  } else if (price2 <= money) {
    console.log("dont't buy anything");
  } else {
    console.log("just buy candy");
  }
}

buySomething(candyPrice, clothPrice, money);
console.log("---------------------------------");

// var testExample = function(func){
//     var greeting = "Hi my name is " + func;
//     return greeting
// }
// var func = "iqbal";
// console.log(testExample(func));

function greet() {}

greet();
console.log("Hello world");
//Level 13--------------------------------------

var randomNumber = Math.random();

console.log(randomNumber);

console.log("----------------------------------");


//Level 14-----------------------------------------

let todos = [
  {
    description: "Learn JavaScript",
    done: false,
  },
  {
    description: "Learn React",
    done: true,
  }
]

function add(todo, finish) {
  todos.push({
    description: todo,
    done: finish
  })
}

function read(){
  todos.forEach(function (todo){
    console.log(`todo: ${todo. description}, Done: ${todo.done}`)
  })
}

function deleted(index){
  todos.splice(index, 1)
}

function update(index, description, done){
  todos[index] = {
    description: description,
    done: done
  }
}

function search(index){
  todos.filter(index => index.length>6)
}