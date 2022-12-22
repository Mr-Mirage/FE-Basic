// Array массив

// let fruits = ["Apple", "Banana"];

// console.log(fruits.length); //длинна массива

// // let first_fruit = fruits[0]; // поиск элемента по индексу
// let first_fruit = fruits[fruits.length - 1]; // доступ к элементу массива по индексу
// console.log(first_fruit);

// fruits.push("Mango"); // Добавление в конец массива

// console.log(fruits);

// let parm1 = fruits.pop(); // Удаление последнего элемента массива

// console.log(fruits);

// let = parm2 = fruits.unshift("Mango") // Добавление в начало массива

// console.log(fruits);

// // fruits.shift(); // Удаление первого элемента массива

// console.log(fruits);

// console.log(parm1); //
// console.log(parm2); // 

// console.log(fruits.indexOf("Banana")); // поиск индекса элемента

// // fruits.splice(1, 1); // Удаление элемента массива по индексу  // удалил только apple и создал новый массив apple
// let spl = fruits.splice(fruits.indexOf("Apple"), 2); // Разделение(создание нового массива) // удалил apple и banana и соддал новый массив apple и banana
// console.log(fruits);
// console.log(spl);

// fruits.push(spl[0]);

// console.log(fruits);



//программа, которая считывает три числа через prompt и добавляет их в массив

// let arr = [];

// let num1 = Number(prompt("Enter the unmber"));
// let num2 = Number(prompt("Enter the unmber"));
// let num3 = Number(prompt("Enter the unmber"));

// arr.push(num1,num2,num3);

// console.log(arr);







// 1.	Создайте массив styles с элементами «Джаз» и «Блюз».
// 2.	Добавьте «Рок-н-ролл» в конец.
// 3.	Замените значение в середине на «Классика».
// 4.	Удалите первый элемент массива и покажите его.
// 5.	Вставьте Рэп и Регги в начало массива.


// Массив по ходу выполнения операций:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл



// let styles = ["Jazz", "Blues"];
// console.log(styles);

// styles.push("Rock-n-Roll");
// console.log(styles);

// styles[1] = "Classic"; // Замена значения т.е. заменил Блюз на Классик!!!!!!!!!
// console.log(styles);

// let first = styles.shift();
// styles.unshift("Rap", "Raggae");
// console.log(styles);

// styles.splice(1,2);
// styles.push("Classic", "Rock-n-Roll");
// console.log(styles);

// styles.shift();
// console.log(styles);

// styles.unshift("Rap", "Raggae");
// console.log(styles);


//          ЦЫКЛЫ           Cycles

// for(Начало; Условие; Шаг){
//     // Тело цикла 
// }

// let num = 0;

// for(let num = 0; num < 5; num++){
//     if (num == 2 || num == 3) {
//         continue;
//     }    
//     console.log(num);
//     // if(num == 2){
//     //     break;
//     // }
// }
// // console.log(num);


// let arr = [];

// for (let num = 0; num < 3; num++){
//     arr.push(Number(prompt("Enter the number")));
//     console.log(arr);
// }
// console.log(arr);

// Только положительные числа из массива

// let arr = [1, 0, -3, 13, -23, 17, 99];

// for(let num = 0; num < arr.length; num++){
//     if(arr[num] > 0){
//         console.log(arr[num]);
//     }
// }

// Сумма всех положительных чисел массива
// let arr = [1, 0, -3, 13, -23, 17, 99];
// let sum = 0;

// for(let num = 0; num < arr.length; num++){
//     if(arr[num] > 0){
//         sum = sum + arr[num]; //+=
//     }
// }
// console.log(sum);

for(let num = 10; num > 0; num--){ // -=2 // +=2
    console.log(num);
}