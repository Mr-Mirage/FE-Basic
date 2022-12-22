// let user1 = {  // cosnst let user1 константа 
//     name: "john",
//     age: 30,
//     isAdmin: true,
//     "likes car": true // если больше одного слова с пробелом
// };

// user1["likes car"] = false; // изменение значения

// user1.isMarried = false; 

// // delete user1.isAdmin; // удаление


// console.log(user1);
// // console.log(user1.name);
// // console.log(user1.age);

// for(let key in user1){
//     console.log(key); //получение ключей
//     console.log(user1[key]); //получение значения ключей
// }

// let codes = {
//     "+49": "Germany",
//     "+41": "Schweiz",
//     "+44": "Britan",

//     "+1": "USA"
// }

// for(let code in codes){
//     console.log(Number(code));
// }

// Напишите код выплнив задание из пункта отдельной строкой:

// Создайте пустой объект юзер.
// Добавте свойство name со значением John.
// Добавте свойство surname со значением сSmith.
// Измените значения свойства name на Pete.
// Удалите значение name из объекта.

// //Мой вариант(тоже пойдёт)
// let user = {
//     name: "John",
//     surname: "Smith"
// }

// user["name"] = "Pete";
// delete user.name;

// console.log(user);

// //Вариант учителя (правильный)
// //let user = {}    
// user.name = "John";    
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;
// for(let key in salaries){
//     sum += salaries[key];
// }
// console.log(sum);