// let hello = `hello my dear friend`
// console.log(hello);
// let num = 10
// console.log(num);
//
// let num1 = 30
//
// const PI = 3.14
// console.log(PI)
//
// num = 20
// console.log(num);
//
// hello = `qqqq`
// console.log(hello);
//
//
// // let msg = hello + ` ` + num;
// // console.log(msg)
//
// let msg = num + num1;
// console.log(msg)
//
// let a = 100
// console.log(typeof hello)
//
// let q = 75 + 'кг'
// console.log(q)
//
// let array = [52, 88, 99, 100]
// console.log(array[3])
// array[5] = 23
// console.log(array)
//
// console.log(10>5);
// console.log(10==10);
// console.log(10!=80)
// console.log(!!5)
// console.log(10-true)
//
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18]
//
// i=0;
// while (i<arr.length){
//     if (i%2 !== 0){
//         console.log(arr[i])
//     }
//     i++
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let num = [2,17,13,6,22,31,45,66,100,-18]
//
// for (i=0; i<num.length; i++)
//     if (i%2 !== 0)
//         console.log(num[i])

// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// let num = [2,17,13,6,22,31,45,66,100,-18]
//
// for (i=0;i<num.length;i++){
//     if (num[i]%2 === 0)
//         console.log(num[i])
// }
// // 7. замінити кожне число кратне 3 на слово "okten"
//
// let num = [2,17,13,6,22,31,45,66,100,-18]
//
// for (i=0; i<num.length;i++){
//     if (num[i]%3 ===0)
//          num[i]=`okten`;
//     console.log(num[i])
// }
// 8. вивести масив в зворотньому порядку.
// let num = [2,17,13,6,22,31,45,66,100,-18]
//
// for (let a = num.length-1; a>=0; a--){
//     console.log(num[a])
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [1,2,3,4,5,6,7,8,9,10]
//
// for (let number of arr) {
//     console.log(number)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['a','b','c','d','e','f','g','h','i','s']
// for (let string of arr) {
//     console.log(string)
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = [true, 'ff', true, 'ere', 'fgg', false, true, 'fff', 'yuyu']
//
// for (let i = 0; i<arr.length;i++){
//     if (typeof arr[i]=== `boolean`){
//         console.log(arr[i])
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [true, 'ff', true, 'ere', 'fgg', false, true, 'fff', 'yuyu', 123]
//
// for (let a = 0; a < arr.length; a++){
//     if (typeof arr[a] === `number`){
//         console.log(arr[a])
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = [true, 'ff', true, 'ere', 'fgg', false, true, 'fff', 'yuyu', 123]
//
// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === `string`){
//         console.log(arr[i])
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 5;
// arr[1] = 'rr';
// arr[2] = true;
// arr[3] = 85;
// arr[4] = 'uuu';
// arr[5] = 'hfuf';
// arr[6] = false;
// arr[7] = 46;
// arr[8] = 84;
// arr[9] = true;
//
// for (let arrElement of arr) {
//     console.log(arrElement)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.writ

// for (i=0; i<100; i++){
//     if (i%2 !== 0){
//         console.log(i)
//     }
// }

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// document.writeln(cutString('наслаждение',3))

// function cutString(str, n) {
//     let aaa = [];
//     for (let i = 3; i < aaa.length; i+n) {
//         let aaaElement = aaa[i];
//         str.split('')
//     }
//     return aaa
// }
//
// document.writeln(cutString('наслаждение',3))
//
// let q = 'hello';
// let rew = q.split('')
// document.writeln(rew)

// function cutString(str,n) {
//     let string = []
//     for (let i = 0; i < str.length; i = i+n) {
//         string.push(str.substr(i, n))
//     }
//     return string;
// }
// console.log(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));
// let str = 'Каждый охотник желает знать';
//
// let deleteFunc = (str, length) => str.slice(0, length)
//
// let q = deleteFunc(str, 7);
// console.log(q);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insertSash = (str) => str.split(' ').join('-').toUpperCase();
// let name = insertSash(str);
// console.log(name)

// for (let n = 0; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
// }

// Write a loop that makes seven calls to console.log to output the following
// triangle:
// console.log('#')
// console.log('##')
// console.log('####')
// console.log('#####')
// console.log('######')
// console.log('#######')

// for (let line = '#'; line.length < 8; line = line + "#")
//     console.log(line)

// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.

//неправильно!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let arr = '';
// for (n=0;n<=8;n++){
//    if (n % 2 ==0){
//        console.log(' ')
// } else{
//     console.log('#')}}

// правильно!!!!!!!!!!!!!!
//
// let board = " ";
//
// for (let y = 0; y < 10; y++){
//     for (let x = 0; x<5; x++){
//         if ((x+y) % 2 == 0){
//             board+= " ";
//         }else {
//             board+="#";
//         }
//     }
//     board += "\n";
// }
// console.log(board)
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr = ['a', 'b', 'c'];
//
// for (let i = 1; i <= 3; i++) {
//     arr.push(i)
// }
// console.log(arr)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово

// let arr = [ 'a', 'b', 'c'];
// let masyv = '';
// for (let i = 0; i < arr.length; i++) {
//     masyv +=arr[i]
// }
// console.log(masyv)

// var i = 'Hello\nWorld'
// console.log(i)

// function User(name, age, status, wifeName, wifeAge) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name: wifeName, age: wifeAge}
//     this.greeting = function () {
//         console.log('hi');
//     };
// }
//
// let user = new User('asd', 123, true, 'anna', 28);
// console.log(user);

// console.log(document.head)
// console.log(document.head.children)

let id = document.getElementById('list1')
console.log(id)

let classN = document.getElementsByClassName('menu')
console.log(classN)

let liList = document.getElementsByTagName('li'); //це всі ліжка з документу витягне
console.log(liList)

