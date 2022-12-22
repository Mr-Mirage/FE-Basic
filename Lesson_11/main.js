"use strict";
console.log("Hello, World!");


// //1. Создание элемента div
// //2. Добавление разметки в созданный элемент
// //3. Добавление созданного элемента в конец выбранного узла (document.body)
// const div = document.createElement("div");
// div.innerHTML="<strong>Hello world!</strong> Tis is created div";
// document.body.append(div);

// //1. Создание элемента div
// //2. Добавление разметки в созданный элемент
// //3. Добавление созданного элемента в начало выбранного узла (document.body)
// const span = document.createElement("span");
// span.innerHTML="I am a span!";
// document.body.prepend(span);

// //Добавление строки до элемента
// //1. Выбрали наш список на странице с помощью document.getElementById
// //2. Добавили строку перед выбраным списком
// const ol = document.getElementById("ol");
// console.log(ol);
// ol.before("Строка до списка"); 

// // добавили строку после выбронного элемента (списка ol)
// ol.after("Строка после списка");

// // Находим элемент (div) на странице
// const elementToDelete = document.querySelector(".text-block--to-delete");
// console.log(elementToDelete);
// // Удаляем элемент при помощи метода remove
// //setTimeout(() => { //удаление по таймингу
// elementToDelete.remove();
// //}, 2000) // удаление по таймингу


// // Объявление функции на добавление элемента
// function clearList(items){
//     // Находим все элементы, соответсвующие условию (items), на странице
//     const elements = document.querySelectorAll(items);
//     console.log(elements);
//     //Перебираем полученный массив
//     for(let item of elements){
//         // К каждому применяем метод remove
//         item.remove();
//     }
// }
    // Вызов созданной функции
// clearList("li");

// Задача: получить ввод данных(список покупок) от пользователя 
// и добавить их в маркированный список
// в виде элементов
// Решение:
// //Создаём список
// const ul = document.createElement('ul');
// // Добавили список в элемент body
// document.body.append(ul);
// //Входим в бесконечный цикл
// while(true) {
//     // Вводим данные (строка для элемента списка)
//     let listItemContent = prompt("Введите что вы хотите купить в магазине", "");
//     // Обрабатываем условие из списка - если ввели пустую строку, цикл завершается
//     if (!listItemContent) {
//         break;
//     }
//     //Создаём элемент списка (тег li)
//     let li = document.createElement("li");
//     //Добавили введную строку в созданный элемент
//     li.innerHTML = listItemContent;
//     // Добавили созданный элемент в конец списка
//     ul.append(li);
// }


//КОЛБЕКИ, Примеры
// 1. Создаём стрелочные функции, чтобы проверить порядок отработки в консоли
const first = () => {
    console.log(1);
}

const second = () => {
    console.log(2);
}

// 2. Вызвали функции, вывели значения в консоль
//first();
//second();

//3. Симулируем асихнронную работу функции при помощи setTimeout
const third = () => {
    setTimeout(() =>{
        console.log(3);
    }, 1000) // 1000 - это миллисекунды, через которые у нас выведется информация (1000 мс = 1с)
}

const four = () => {
    console.log(4);
}

// 4. Вызвали созданные функции и увидели асинхронность
//third();
//four();

//Создаём функцию вывода задац в консоль
const showTasks = (task, callback) => {
    // Вывели задачу в консоль
    console.log(`Сегодня нужно сделать эту задачу: ${task}`);
    // Вызвали колбэк функцию (любую, какую мы передали в качестве аргумента)
    callback();
}
// Создали функцию итогов дня
const daySummary = () => {
    console.log("День был насыщённым!");
}

const weekendSummary = () => {
    console.log("Выходной был супер!")
}

// Два раза вызываем наши задачи на день с РАЗНЫМИ колбэками
showTasks("Позвонить врачу", daySummary);
showTasks("Сходить в зоопарк", weekendSummary);

console.log("--------for each callback-------");


// Задание: написать функцию, которая принимает себя в качестве первого аргумента массив,
// а в качестве второго -- функцию. Принятую функцию нужно вызвать 1 раз для каждого 
// элемента массива. 
const applyForEach = (arr, callback) => {
    // При помощи метода map мы перебираем массив и применяем нашу колбэк функцию
    // к каждому элементу. Метод "map" возращает в качестве результата нам 
    // новый массив (т.е. наши манипуляции не повлияют на исходные данные)
    const multupliedSalaries = arr.map((salary, index) => callback(salary));
    console.log(multupliedSalaries);

    const sum = multupliedSalaries.reduce((acc, item) => acc + item, 0);
    console.log(sum, "result");
}
// Создаем стрелочную функцию, которая принимает в себя 1 значение (аргумент)
// и возвращает нам это значение, умноженное на 4
const multiplyByFour = (value) => {
    console.log(value*4);
    return value*4;
}

// const salaries = [1000, 2000, 3000, 4000];
// Вызываем нашу функцию, передаем в нее созданный массив и ссылку на функцию умножения
applyForEach(salaries, multiplyByFour);

