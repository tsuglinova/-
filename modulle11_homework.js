Задача 1
const someArray = [0, 1, 2, 3, 4, 5, 6, 0, 8, 9, 10, 0, 't', null, NaN, true];

function countEvenOddZeroElements(array) {
    if (!Array.isArray(array)) {
        console.log('Передайте массив');
        return;
    }

    let countOdd = 0;
    let countEven = 0;
    let zeroElementsCount = 0;

    array.forEach(item => {
        if (typeof item === 'number' && !isNaN(item)) {
            if (item === 0) {
                zeroElementsCount++;
            }
            else if (item % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }
    });

    return {
        countOdd,
        countEven,
        zeroElementsCount
    }
}

const result = countEvenOddZeroElements(someArray);

console.log(`Колличество четных элементов: ${result.countEven}`);
console.log(`Колличество нечетных элементов: ${result.countOdd}`);
console.log(`Колличество нулевых элементов: ${result.zeroElementsCount}`);

Задача 2 
function isPrimeNumber(num) {
    if ((num < 2) || (num > 1000)) {
        return 'Данные не верны';
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return 'Составное';
            }
        }
        return 'Простое';
    }
}

let randomNumber = Math.floor(Math.random() * 1000);
let result = isPrimeNumber(randomNumber);
console.log(`Число ${randomNumber} - ${result}`);

Задача 3
function sum(x) {
  return function summ(y) {
    return console.log(x+y);
  }
}

sum(9)(7)

Задача 4
function num(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  num(5, 15);

Задача 5
const sum = (x, n) => {

    const result = Math.pow(x, n);
    console.log(result)
    return result;
  
  };

sum(8, 3);

