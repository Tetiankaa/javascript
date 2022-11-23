// - Знайти та вивести довижину настипних стрінгових значень
let hello = 'hello world';
let lorem = 'lorem ipsum';
let java = 'javascript is cool'

console.log(hello.length);
console.log(lorem.length);
console.log(java.length)

// - Перевести до великого регістру наступні стрінгові значення
let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool'

console.log(a.toUpperCase())
console.log(b.toUpperCase())
console.log(c.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
let aa = 'HELLO WORLD';
let bb = 'LOREM IPSUM';
let cc = 'JAVASCRIPT IS COOL'

console.log(aa.toLowerCase())
console.log(bb.toLowerCase())
console.log(cc.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str1 = 'Ревуть воли як ясла повні';
//     let stringToarray = str1.split(' ')
//     console.log(stringToarray)

// або так ще можна написати ??

function stringToarray(str) {
    console.log(str1.split(str));
}
stringToarray(' ')

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

    let arr = [10,8,-7,55,987,-1011,0,1050,0]
    let map = arr.map(function (value, str) {
        return (value + ' ')
    })
console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
console.log(nums.sort(function (a,b) {
    if (a < b){
        return -1;
        }
        if (a > b){
            return 1;
            }
            if (a === b){
                return 0;
            }
}));
console.log(nums.sort(function (a,b) {
    if (a < b){
        return 1;
    }
        if (a > b){
            return -1;
        }
            if (a === b){
                return 0;
            }
}));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort(function (a,b) {
    if (a.monthDuration < b.monthDuration){
        return 1;
    }
    if (a.monthDuration > b.monthDuration){
        return -1;
    }
    if (a.monthDuration === b.monthDuration){
        return 0;
    }
}));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter(function (x ){
   return x.monthDuration > 5;
});
console.log(filter)

// описати колоду карт
let deck = [
    {cardSuit:'Spade', value: 6, color:'Black'},
    {cardSuit:'Clubs', value: 6, color:'Black'},
    {cardSuit:'Hearts', value: 6, color:'Red'},
    {cardSuit:'Diamonds', value: 6, color:'Red'},
    {cardSuit:'Spade', value: 7, color:'Black'},
    {cardSuit:'Clubs', value: 7, color:'Black'},
    {cardSuit:'Hearts', value: 7, color:'Red'},
    {cardSuit:'Diamonds', value: 7, color:'Red'},
    {cardSuit:'Spade', value: 8, color:'Black'},
    {cardSuit:'Clubs', value: 8, color:'Black'},
    {cardSuit:'Hearts', value: 8, color:'Red'},
    {cardSuit:'Diamonds', value: 8, color:'Red'},
    {cardSuit:'Spade', value: 9, color:'Black'},
    {cardSuit:'Clubs', value: 9, color:'Black'},
    {cardSuit:'Hearts', value: 9, color:'Red'},
    {cardSuit:'Diamonds', value: 9, color:'Red'},
    {cardSuit:'Spade', value: 10, color:'Black'},
    {cardSuit:'Clubs', value: 10, color:'Black'},
    {cardSuit:'Hearts', value: 10, color:'Red'},
    {cardSuit:'Diamonds', value: 10, color:'Red'},
    {cardSuit:'Spade', value: 'Jack', color:'Black'},
    {cardSuit:'Clubs', value: 'Jack', color:'Black'},
    {cardSuit:'Hearts', value: 'Jack', color:'Red'},
    {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
    {cardSuit:'Spade', value: 'Queen', color:'Black'},
    {cardSuit:'Clubs', value: 'Queen', color:'Black'},
    {cardSuit:'Hearts', value: 'Queen', color:'Red'},
    {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
    {cardSuit:'Spade', value: 'King', color:'Black'},
    {cardSuit:'Clubs', value: 'King', color:'Black'},
    {cardSuit:'Hearts', value: 'King', color:'Red'},
    {cardSuit:'Diamonds', value: 'King', color:'Red'},
    {cardSuit:'Spade', value: 'Ace', color:'Black'},
    {cardSuit:'Clubs', value: 'Ace', color:'Black'},
    {cardSuit:'Hearts', value: 'Ace', color:'Red'},
    {cardSuit:'Diamonds', value: 'Ace', color:'Red'}
];

// - знайти піковий туз

let findSpadeAce = deck.filter((q) => q.cardSuit === 'Spade' && q.value==='Ace')
console.log(findSpadeAce)

// - всі шістки

let allSix = deck.filter((w) => w.value === 6)
console.log(allSix)

// - всі червоні карти

let redCards = deck.filter((e) => e.color === 'Red')
console.log(redCards)

// - всі буби

let allDiamonds = deck.filter((r) => r.cardSuit === 'Diamonds')
console.log(allDiamonds)

// - всі трефи від 9 та більше

let clubs = deck.filter((t) => t.cardSuit === 'Clubs' && t.value >=9)
console.log(clubs)

// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт

let reduce = deck.reduce((obj, item) => {
    if (item.cardSuit === 'Spade'){
    obj.spades.push(item);
    } else if (item.cardSuit === 'Diamonds'){
    obj.diamonds.push(item);
    } else if (item.cardSuit === 'Hearts'){
        obj.hearts.push(item);
    } else if (item.cardSuit === 'Clubs')
        obj.clubs.push(item);

    return  obj;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(reduce);