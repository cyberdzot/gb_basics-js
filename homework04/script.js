// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
for (let i = 0; i < 11; i++) {
  if (i == 0) {
    console.log("0 - это ноль");
  } else if (i % 2 == 0) {
    console.log(`${i} – чётное число`);
  } else {
    console.log(`${i} – нечётное число`);
  }
}


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const countDelete = 2;
const indexDelete = 3;
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr);
arr.splice(indexDelete, countDelete);
console.log(arr);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
const maxNumberRandom = 9;
const arrayLength = 5;
const findNumber = 3;

let getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

let createArray = (len, maxValueInCell) => {
  let new_arr = [];
  for (let i = 0; i < len; i++) {
    new_arr[i] = getRandomInt(maxValueInCell);
  }
  return new_arr;
};

let getSumValueInArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

let getMinValueInArray = (arr) => {
  let minValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return minValue;
};

let arr_random = createArray(arrayLength, maxNumberRandom);
console.log(arr_random);
console.log("Сумма элементов: " + getSumValueInArray(arr_random));
console.log("Минимальное число: " + getSumValueInArray(arr_random));
let findNumberInArray = arr_random.find((element) => element == findNumber);
console.log(
  findNumberInArray == undefined ? "Число 3 не найдено!" : "Число 3 найдено."
);


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx
for (let i = 1; i <= 20; i++) {
  let concatText = "";
  for (let j = 0; j < i; j++) {
    concatText += "x";
  }
  console.log(`${i} ${concatText}`);
}
