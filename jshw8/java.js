// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let users = [];
// let user1 = new User(14,'Tanya','Korsun','tanya@gmail.com','+380689977855')
// let user2 = new User(2,'Igor','Igorovych','igor@gmail.com','+380736699555')
// let user3 = new User(31,'Vasya', 'Vasylovych', 'vasya@gmail.com', '+380997744552')
// let user4 = new User(14,'Sergii', 'Sergijovych', 'igor@gmail.com', '+380445563284')
// let user5 = new User(88,'Anna', 'Viktorivna', 'anna@gmail.com','+380668848126')
// let user6 = new User(6,'Ruslan', 'Petrovych', 'ruslan@gmail.com','+380668899126')
// let user7 = new User(19,'Valera', 'Borisovych', 'valera@gmail.com','+380859674236')
// let user8 = new User(11,'Katya', 'Oleksandrivna', 'katya@gmail.com','+3805623963')
// let user9 = new User(21,'Yevhenii', 'Viktorovych', 'yevhenii@gmail.com','+380963322412')
// let user10 = new User(10,'Olena', 'Pavlivna', 'olena@gmail.com','+380668574126')
// users.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)
// console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = users.filter((user) => user.id % 2 ===0)
// console.log(filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(users.sort(function (a, b){
//     if (a.id<b.id){
//         return -1;
//     }
//     if (a.id>b.id){
//         return  1;
//     }
//     if (a.id === b.id){
//         return 0;
//     }
// }));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client extends User{
//
//     constructor(id, name, surname , email, phone, order) {
//         super(id, name, surname , email, phone);
//         this.order = order;
//     }
// }
//
// // створити пустий масив, наповнити його 10 об'єктами Client
// let arr2 = [];
//
// let user1 = new Client(9,'anna', 'korsun', 'tanya@gmail.com', '+380678956417', ['tomato', 'eggs','milk', 'bananas'])
// let user2 = new Client(77,'Yevhenii','Korsun', 'yevhen@gmail.com','+38566997741', ['note','pen'])
// let user3 = new Client(56,'Vasya', 'Balu', 'vasya@gmail.com','+38055669974' ,['a cup', 'sugar'])
// let user4 = new Client(74,'tanya', 'liutik','tanyya@gmail.com', '+967485123',['notebook','chokolate', 'coffee'])
// let user5 = new Client(1, 'olena', 'petrova','olena@gmail.com', '+3588774125', ['tea', 'cake'])
// let user6 = new Client(45,'Natasha', 'fisher', 'nati@gmail.com', '+38052417414', ['pensil'])
// let user7 = new Client(16, 'Yulia', 'Vereshak', 'yulia@gmail.com', '3802356745',['glass', 'vase'])
// let user8 = new Client(44,'katya', 'meliuch', 'katya@gmail.com','+380678509392', ['soda', 'juice', 'champagne','orange'])
// let user9 = new Client(8,'marina', 'lutinska', 'mariina@gmail.com', '+38056723417', ['onion', 'salt', 'sugar'])
// let user10 = new Client(63,'vera', 'stankova', 'ver@gmail.com', '+380562363933', ['dress', 't-shirt', 'boots'])
// arr2.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)
// console.log(arr2)
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(arr2.sort((a,b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model,producer,year, max_speed,engine_capacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.max_speed = max_speed;
//     this.engine_capacity = engine_capacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//     }
//     this.info = function () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function'){
//                 console.log(`${carKey} -- ${this[carKey]}`);
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.max_speed += newSpeed
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
// const car = new Car('Octavia','Skoda','2020',240,'2л' );
//
// let driver = {name: 'Vasya', surname: 'Popov', id: 'FX789641'};

// car.drive();
// car.info();
// car.increaseMaxSpeed(5)
// car.changeYear(2019)
// car.addDriver({name:'Vasya', surname:'Popov', id:'FX789641'})
// console.log(car)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model,producer,year, max_speed,engine_capacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.engine_capacity = engine_capacity;}
//
//     drive()
//         {
//             console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//         }
//         info()
//         {
//             for (const carKey in this) {
//                 if (typeof this[carKey] !== 'function'){
//                     console.log(`${carKey} : ${this[carKey]}`)
//                 }
//             }
//         }
//         increaseMaxSpeed(newSpeed)
//         {
//             this.max_speed += newSpeed
//         }
//         changeYear(newValue)
//             {
//                 this.year = newValue
//             }
//         addDriver(driver)
//         {
//             this.driver = driver
//         }
//     }
//
// const car = new Car('Octavia','Skoda','2020',240,'2л' );
//
// let driver = {name: 'Vasya', surname: 'Popov', id: 'FX789641'};
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(1)
// car.changeYear(2019)
// car.addDriver({name:'Vasya', surname:'Popov', id:'FX789641'})
// console.log(car)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


function Popeliushka(name, years, foot) {
        this.name = name;
        this.years = years;
        this.foot = foot;
    }
let popeliushka1 = new Popeliushka('Tanya', 5,25);
let popeliushka2 = new Popeliushka('Katya', 37,37);
let popeliushka3 = new Popeliushka('Anya', 23,28);
let popeliushka4 = new Popeliushka('Marina', 30,30);
let popeliushka5 = new Popeliushka('Olena', 29,34);
let popeliushka6 = new Popeliushka('Natasha', 44,30);
let popeliushka7 = new Popeliushka('Olga', 12,30);
let popeliushka8 = new Popeliushka('Oksana', 18,39);
let popeliushka9 = new Popeliushka('Halia', 21,38);
let popeliushka10 = new Popeliushka('Yulia', 24,40);

const array = [];
array.push(popeliushka1,popeliushka2,popeliushka3,popeliushka4,popeliushka5,popeliushka6,popeliushka7,popeliushka8,popeliushka9,popeliushka10);

class Princ {
    constructor(name, age, findFoot) {
        this.name = name;
        this.age = age;
        this.findFood = findFoot;
    }
}
const princ = new Princ('Yevhen',27,50);

const findPopelushka = function (popelushka, princc){
    for (const item of popelushka) {
        if (item.foot === princc.findFood){
            console.log(`${item.name} is my popelushka`)
        }else {
            console.log(`this is mistake`)
        }
    }
}
findPopelushka(array, princ);