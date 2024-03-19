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
   alert( i + ": " + item + " (массив:" + arr + ")" );
 });
 const.length;

