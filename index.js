Задача1
const result = +prompt('Введите число')
if (typeof + result !== 'number') {
  alert ('Упс, кажется, вы ошиблись')
} else if (Number.isNaN(result)) {
  alert('Упс')
} else if (result % 2 == 0) {
  alert('Число четное')
} else  {
  alert('число нечетное')
}

Задача2
const x = 1
if (typeof x === "number")
  {
  console.log("x-число");
}
else if (typeof x === "string") {
  console.log("x-строка");
}
else if (typeof x === "boolean") {
  console.log ("x-логический тип")
}
 else {
  console.log ("x-тип не определен")
 }

Задача3
function reverseString(str){
  var splitString = "hello".split("");
  var reverseArray = splitString. reverse();
  var joinArray = reverseArray. join("");
 return joinArray;
   }
 reverseString("hello");

Задача 4
Math.floor(Math.random()*101);

Задача 5
const arr = ["2", "5", "8"];

 arr.forEach(function(item, i, arr) {
   console.log( i + ": " + item + " (массив:" + arr + ")" );
 });
 console.log (arr.length);

 Задача 6

const numbers = [5 , 5 ,5 , 8 , 17 , 7 ,17]; 

const countItems = {}; 

for (const item of numbers) {
   countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
}

const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
console.dir(result); 

Задача 7
function funcName() { 

let arr = [2, 10, 0 , 7 , 0 , 5, 0 ,17];
let even = 0;
let odd = 0;
let zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero ++
        } else if (arr[i]%2 == 0) {
            even ++
        } else {
            odd ++
        }
    }

console.log(zero, even, odd);
  }

funcName(); 
Задача 8 
let fruits = new Map ()
fruits.set("apple" , "green");
fruits.set("bluberry" , "blue");
fruits.set("banana" , "yellow")

for (let pair of fruits.entries()){
  console.log ( `Ключ - ${pair[0]} , Значение - ${pair[1]}`);
 }
