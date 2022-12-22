// let elements = document.querySelectorAll("li");
// console.log(elements[0].innerHTML);
// console.log(elements[1].innerHTML);


// for (let elem of elements) {
//     console.log(elem.innerText);
// }

// let elements = document.querySelectorAll("ul > li:last-child");

// for(let elem of elements){
//     console.log(elem.innerText);
// }

// let element = document.querySelector("a");

// element.innerText = "Facebook";
// console.log(element.innerText);


// let element = document.querySelector(".red");
// element.innerText = "Privet";
// console.log(element.innerText);

// document.querySelector(".red").innerText = "Privet"; // Лучше не использовать(без вывода в консоль)(только для обной операции)

// let element = document.querySelectorAll("p");
// for(let elem of element){
//     elem.innerText = "Privet";   
// }

//Замена значения атрибута
// let link = document.querySelector("a");
// link.setAttribute("href", "https://www.google.com/");

// link.setAttribute("target", "_blank"); // открытие в новой вкладке

// link.getAttribute("href");
// console.log(link.getAttribute("href"));


// let url = "https://cdn.shortpixel.ai/spai/w_530+q_lossy+ret_img+to_webp/https://catdepot.org/wp-content/uploads/2019/02/home-header-08.png";

// let images = document.querySelectorAll(".main > img");

// for(let i = 0; i < 5; i++){
//     images[i].setAttribute("src", url);
// }


let links_array = [];

let links = document.querySelectorAll("a");

for (let link of links){
    links_array.push(link.getAttribute("href"));
}

console.log(links_array);