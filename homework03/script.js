// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
let raiseToCube = (number) => {
    return number ** 3;
}

console.log(`Возведение в куб: ${raiseToCube(4)}`);



// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
let calcSalary = (number) => {
    return number * 0.87;
}

let outputNumber = parseInt(prompt("Введите число"));
if (!outputNumber) {
    console.log("Значение задано не верно! Зарплату не посчитать!");
} else {
    console.log("Размер заработной платы за вычетом налогов равен: " + calcSalary(outputNumber));
}



// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
let getMaxValue = (number1, number2, number3) => {
    let tempMax = number1;
    if (tempMax < number2) {
        tempMax = number2;
    }
    if (tempMax < number3) {
        tempMax = number3;
    }
    return tempMax;
}

let outputNumber1 = parseInt(prompt("Введите число #1"));
let outputNumber2 = parseInt(prompt("Введите число #2"));
let outputNumber3 = parseInt(prompt("Введите число #3"));
let max = getMaxValue(outputNumber1, outputNumber2, outputNumber3);
console.log(`Среди чисел: ${outputNumber1} ${outputNumber2} ${outputNumber3}, максимальное: ${max}`);



// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

let sum = (number1, number2) => {
    return number1 + number2;
}

let difference = (number1, number2) => {
    if (number1 > number2) {
        return number1 - number2;
    }
    return number2 - number1;
}

let multiply = (number1, number2) => {
    return number1 * number2;
}

let divide = (number1, number2) => {
    return number1 / number2;
}

console.log(sum(2, 6));         // 8
console.log(difference(2, 6))   // 4
console.log(multiply(2, 6));    // 12
console.log(divide(2, 6));      // 0.3...
