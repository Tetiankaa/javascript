// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let one = [100, true, 5, "hello", false, 200, "tetiana", 500, "cat", 800  ]
console.log(one[0])
console.log(one[1])
console.log(one[2])
console.log(one[3])
console.log(one[4])
console.log(one[5])
console.log(one[6])
console.log(one[7])
console.log(one[8])
console.log(one[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: `Harry Potter`,
    pageCount: 250,
    genre: `fantasy`
}

let book2 = {
    title: `Death on the Nile`,
    pageCount: 430,
    genre: `thriller`
}
let book3 = {
    title: `Zapovit`,
    pageCount: 125,
    genre: `lyrics`
}

    // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

book1.authors =  [{name:`Joanne Rowling`, age:60}]
console.log(book1)

book2.authors =  [{name:`Agatha Christie`, age:80}]
console.log(book2)

book3.authors =  [{name:`Taras Shevchenko`, age:90}]
console.log(book3)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let users = [
    {name:`tanya`, username:`tanya1`, password:1996 },
    {name:`vasya`, username:`vasya1`, password:19986 },
    {name:`katya`, username:`katya1`, password:208596 },
    {name:`anna`, username:`anna1`, password:10068 },
    {name:`oleg`, username:`oleg1`, password:569745 },
    {name:`boris`, username:`boris1`, password:12369 },
    {name:`viktor`, username:`viktor1`, password:8541 },
    {name:`marina`, username:`marina1`, password:56897 },
    {name:`valera`, username:`valera1`, password:1111 },
    {name:`yevhen`, username:`yevhen1`, password:88889 }
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)