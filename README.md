# -const result = +prompt('Введите число')
if (typeof + result !== 'number') {
  alert ('Упс, кажется, вы ошиблись')
} else if (isNaN(result)) {
  alert('Упс')
} else if (result % 2 == 0) {
  alert('Число четное')
} else  {
  alert('число нечетное')
}
