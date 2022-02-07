// JavaScript Practical Tasks
// Задача #1
// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   });
// }
// Что выведет консоль и почему?
// Вывод в console будет выведено 10 раз число 10, поскольку функция вызова в setTimeoute
// -----------------------------------------------
// Задача #2
// Write a JavaScript program to display the current day and time in the following format.
// Sample Output :
// Today is : Friday.
// Current time is : 4 PM : 50 : 22
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const date = daysOfWeek[new Date().getDay()];
console.log(`Today is : ${date}.`);

let hours = new Date().getHours();
const minutes = ("0" + new Date().getMinutes()).slice(-2);
const seconds = new Date().getSeconds();
let dayOrNight = "AM";
if (hours >= 12) {
  hours = hours - 12;
  dayOrNight = "PM";
}
console.log(
  `Current time is : ${hours} ${dayOrNight} : ${minutes} : ${seconds}`
);
// -----------------------------------------------
// Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
function reverseNumber(num) {
  return Number(String(num).split("").reverse().join(""));
}
console.log(reverseNumber(32243));

// -----------------------------------------------
// Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
const factorial = (x) => {
  if (x == 1) {
    return x;
  }
  return x * factorial(x - 1);
};
console.log(factorial(6));

// -----------------------------------------------
//  Write a JavaScript program that accept two integers and display the larger.
const maximum = (x, y) => {
  return x > y ? x : y;
};
console.log(maximum(20, 100)); // with function
// OR
console.log(Math.max(12, 54)); // with Math.method()

// -----------------------------------------------
// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array:
const myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red+Green+White+Black"
console.log(myColor.join(","));
console.log(myColor.join("+"));

// -----------------------------------------------
// Write a JavaScript function to get the month name from a particular date.
// Test Data :
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October"
// "November"
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function month_name(arg) {
  return monthNames[arg.getMonth()];
}
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
// -----------------------------------------------
// Write a JavaScript program to test the first character of a string is uppercase or not
const test = (str) => {
  return str[0].toUpperCase() === str[0] ? true : false;
};
console.log(test("Gfre"));

// -----------------------------------------------
// Write a JavaScript program to draw a smile
function draw() {
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    let eyes = canvas.getContext("2d");
    let mouse = canvas.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#ffdd00";
    ctx.arc(100, 100, 80, 0, Math.PI * 2, true); // лицо
    ctx.moveTo(144, 135);
    ctx.fill();

    ctx.fillStyle = "#330";
    ctx.beginPath();
    ctx.arc(100, 110, 50, 0.5, Math.PI - 0.5, false); // рот
    ctx.fill();
    ctx.moveTo(85, 85);

    ctx.fillStyle = "#330";
    ctx.beginPath();
    ctx.arc(70, 85, 15, 0, Math.PI * 2, true); // левый глаз
    ctx.moveTo(145, 85);
    ctx.arc(130, 85, 15, 0, Math.PI * 2, true); // правый глаз
    ctx.fill();
  }
}
draw();

// -----------------------------------------------
// Задача №4
// Задание 1
// На странице есть верстка:
// <div id="string-1">Ядра в вёдра, выдру в тундру!</div>
// <div id="string-2">Выдрав с выдры в тундре гетры</div>
// <div id="string-3">В недрах тундры, выдры в гетрах </div>
// <div id="string-4">Вытру гетрой выдре морду </div>
// <div id="string-5">Тырят в вёдра ядра кедров!</div>
// <div id="string-6">Вытру выдрой ядра кедров</div>

// Необходимо поочередно обратиться к каждому тэгу в нужном порядке, и вывести их содержимое в консоль, чтобы получилась осмысленная скороговорка.
const arrOfNum = [3, 5, 2, 6, 4, 1];
for (let i = 0; i < arrOfNum.length; i++) {
  const div = document.getElementById(`string-${arrOfNum[i]}`);
  console.log(`${div.innerText}`);
}
// Вывод в консоли:
// В недрах тундры, выдры в гетрах
// Тырят в вёдра ядра кедров!
// Выдрав с выдры в тундре гетры
// Вытру выдрой ядра кедров
// Вытру гетрой выдре морду
// Ядра в вёдра, выдру в тундру!

// -----------------------------------------------
// Задание 2
// На странице есть верстка
// <div class="element">Element 1</div>
// <div class="element">Element 2</div>
// <div class="element">Element 3</div>
// <div class="element">Element 4</div>
// <div class="element">Element 5</div>
// <div class="element">Element 6</div>
// С помощью JS необходимо первым трем  элементам задать красный цвет текста, а остальным трем - зеленый.
const allElements = document.querySelectorAll(".element");
for (let i = 0; i < allElements.length; i++) {
  let element = allElements[i];
  if (i < 3) {
    element.style.color = "red";
  } else {
    element.style.color = "green";
  }
}

// -----------------------------------------------
// Задание 3
// На странице есть контейнер <ol id="todo-list"></ol>, необходимо с помощью цикла добавить в него пять задач (элементов <li>) с классом task и текстом, взятым из массива задач из пяти элементов:
var tasks = [
  "Buy lemonade",
  "Make toasts",
  "Repair car",
  "Play games",
  "Pet a cat",
];
// Ожидаемый результат в инспекторе после выполнения скрипта:
// <ol id="todo-list">
// 	<li class="task">Buy lemonade</li>
// 	<li class="task">Make toasts</li>
// 	<li class="task">Repair car</li>
// 	<li class="task">Play games</li>
// 	<li class="task">Pet a cat</li>
// </ol>
const todoList = document.querySelector("#todo-list");
for (let i = 0; i < tasks.length; i++) {
  const item = document.createElement("li");
  item.classList.add("task");
  const text = document.createTextNode(`${tasks[i]}`);
  item.appendChild(text);
  todoList.appendChild(item);
}

// -----------------------------------------------
// Задание 4
// На странице есть следующая разметка:
/* <article>
  <h3>What is Lorem Ipsum?</h3>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages.
  </p>
  <h3>Where does it come from?</h3>
  <p>
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has
    roots in a piece of classical Latin literature from 45 BC, making it over
    2000 years old. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
    amet..", comes from a line in section 1.10.32. from "The Extremes of Good
    and Evil" by Cicero
  </p>
  <h3>Why do we use it?</h3>
  <p>
    It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of using
    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
    opposed to using 'Content here, content here', making it look like readable
    English.
  </p>
</article>; */
// Вам необходимо с помощью JavaScript вставить после каждого тега <p> тег <hr>, для визуального отделения абзацев друг от друга.
// Указания:
// Подразумевается, что вышеуказанная разметка находится внутри тега <body>.
// Нельзя модифицировать указанную разметку.
// За использование цикла дополнительные баллы.
const text = document.querySelectorAll("article>p");
for (let i = 0; i < text.length; i++) {
  const hr = document.createElement("hr");
  text[i].after(hr);
}

// -----------------------------------------------
// Задание 5
// Дана такая разметка:
// <div id="cart-items">
// 	<div class="item">Milk 1 l.<span class="qty">x 2</span></div>
// 	<div class="item">Cola 1.5 l. <span class="qty">x 1</span></div>
// 	<div class="item">Bread<span class="qty">x 2</span></div>
// 	<div class="item">Cheese<span class="qty">x 1</span></div>
// 	<div class="item">Chocolate bar<span class="qty">x 3</span></div>
// </div>
// Необходимо с помощью JavaScript удалить элемент "Cola 1.5 l" и заменить товар "Chocolate bar" на "Canned Fish", количеством 4 штуки.
// Указания:
// Для удаления использовать .remove()
// Для замены использовать .replaceChild()
// Подразумевается, что вышеуказанная разметка находится внутри тега <body>.
const cartItems = document.querySelector("#cart-items");
const listItems = document.querySelectorAll(".item");
listItems[1].remove(); // Delete element
const itemDiv = document.createElement("div"); // Create element 'div'
const itemClassName = itemDiv.setAttribute("class", "item"); // add class name 'item'
const itemContent = document.createTextNode("Canned Fish");
itemDiv.appendChild(itemContent); // add text to div
const itemSpan = document.createElement("span"); // Create element 'span'
itemSpan.innerText = "x 4";
itemDiv.appendChild(itemSpan); // add span to div
cartItems.replaceChild(itemDiv, listItems[4]); // replace div
