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




