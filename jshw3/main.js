// // - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = +prompt(5);
//
// if (x !== 0){
//     console.log('right')
// } else {
//     console.log('wrong')
// }
//
// let a = +prompt(1);
//
// if (a === 1){
//     console.log('right')
// }else {
//     console.log('wrong')
// }
//
//
// let a1 = +prompt(0);
//
// if (a1 === 0){
//     console.log('right')
// }else {
//     console.log('wrong')
// }
//
// let a2 = +prompt(-3);
//
// if (a2 === -3){
//     console.log('right')
// }else {
//     console.log('wrong')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time = +prompt(26);
//
// if (time <= 15){
//     console.log('1 part');
// }else if (time >15 && time <=30){
//     console.log('2 part');
// }else if (time > 30 && time <=45){
//     console.log('3 part');
// }else if (time > 45 && time <=59) {
//     console.log('4 part');
// }else {
// //     console.log('this is wrong')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = 18;
//
// if (day<=10){
//     console.log('1 decade');
// }else if (day>10 && day <=20){
//     console.log('2 decade');
// }else if (day > 20 && day <= 30){
//     console.log('3 decade');
// }else {
//     console.log('faulse')
// }
//
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// switch ('one') {
//     case 'one':
//         console.log('Monday');
//         break;
//     case 'two':
//         console.log('Tuesday');
//         break;
//     case 'three':
//         console.log('Wednesday');
//         break;
//     case 'four':
//         console.log('Thursday');
//         break;
//     case 'five':
//         console.log('Friday');
//         break;
//     case 'six':
//         console.log("Saturday");
//         break;
//     case 'seven':
//         console.log('Sunday');
//         break;
//     default:
//         console.log('it is wrong')
// }
//
// // - Користувач вводить або має два числа.
// //     Потрібно знайти та вивести максимальне число з тих двох .
// //     Також потрібно врахувати коли введені рівні числа.
//
// let num = 20;
// let num1 = 35;
//
// if (num<num1){
//     console.log(num1)
// }else if (num>num1){
//     console.log(num)
// }else if (num===num1){
//     console.log(true)
// }else {
//     console.log('false')
// }
//
// // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// //     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
//
let x1 = 0;
if (x1){
    console.log('hi');
}else {
    console.log('default')
}