// let r = 12;
// let g = 34;
// let b = 14;

// console.log("rgb(" + r + ', ' + g + ', ' + b +')');

// console.log(`rgb(${r}, ${g}, ${b})`);

//Задача: Написать программу, которая запрашивает у пользователя его возраст (в годах) и 
//выводит, сколько ему минут.

// let age = prompt("Сколько вам?");

// let sum = age * 525600;

// console.log(sum);

// Задача: Написать программу, которая считывает через prompt число и выводит в консоль ее квадрат.

// let num  = prompt("Give number");
// num = num = Number(num);
// console.log(num ** 2);

// Задача: Написать программу, которая считывает два числа 
// (объявляем две переменные и записываем туда результат работы двух вызовов prompt) и выводит их сумму. 
// Не забудьте преобразовать полученные значения в число.

// let num1 = Number(prompt("number1"));
// let num2 = Number(prompt("number2"));
// console.log(num1 + num2);

//Задача.  Написать программу, которая получает два числа и выводит наибольшее.

// let num1 = Number(prompt("Enter number 1"));
// let num2 = Number(prompt("Enter number 2"));

// if(num1 > num2){
//     console.log("Номер 1 больше");
// }
// else if(num1 == num2){
//     console.log("Одинаковы");
// }
// else{
//     console.log("Номер 2 больше");
// }

// Задача. Написать программу, которая считывает через prompt одно число и 
// выводит одну из строк “число четное”, “число нечетное”, “число равно нулю”.

let num = Number(prompt("Enter number"));

if(num == 0){
    console.log("ноль");
}
else if(num % 2 == 0){
    console.log("чётное");
}
else{
    console.log("нечётное");
}
