// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a,b){
    let result = a * b;
    console.log(result);
}
rectangle(2,5);
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circle(PI, r){
    let result = PI*r**2;
    console.log(result)
}
circle(3.14, 5)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(PI,r,h){
     return PI*2*r*h;
}
console.log(cylinder(3.14,2,5))

// - створити функцію яка приймає масив та виводить кожен його елемент

function printArray(arr){
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
printArray(users);

// створити функцію яка створює параграф з текстом. Текст задати через аргумент

function par(text){
    document.write(`<p>${text}</p>`)
}
par(`Hello, I am Tetiana`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createLi(text){
    
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
}
createLi(`How old are you?`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function foo(text, num) {

    document.write(`<ul>`)
        for (let i = 0; i < num; i++) {

            document.write(`
        <li>${text}</li>`);
        }
        document.write(`</ul>`)
}
foo(`Hello World`,3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let masyv = [1, `hi`,true,2,`okten`, false];

function getMasyv(build){
    document.write(`<ul>`)
    for (let buildElement of build) {
        document.write(`<li>${buildElement}</li>`)
    }
    document.write(`</ul>`)
}
getMasyv(masyv)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrayofobjects = [
    {name:`Tanya`, id:7, age:26},
    {name:`Vasya`, id:9, age:31}
]

let sss = function (block){
    for (const blockElement of block) {
        document.write(`<div>${blockElement.name}, ${blockElement.id}, ${blockElement.age}</div>`)
    }
}
sss(arrayofobjects)

// - створити функцію яка повертає найменьше число з масиву

let number = [8,4,0,7];

let qqq = function (lessnumber){
    let min = lessnumber[0];
    for (let minElement of lessnumber) {
        if (minElement<min){
            min = minElement
        }
    }
return min;
}
console.log(qqq(number))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let qwe = [1,2,3];

function some (add){
        let a = 0;
    for (let addElement of add) {
        a = a + addElement;

    }
return a;
}
let s = some(qwe);
console.log(s)