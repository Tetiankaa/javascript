let url = new URL(location.href);
// console.log(url);
let postT = url.searchParams.get('post');
// console.log(postT);
let parse = JSON.parse(postT);
console.log(parse);
for (const item in parse) {
    const div = document.createElement('div');
    div.innerText = `${item}: ${parse[item]}`
    div.classList.add('two')
    document.body.appendChild(div);
}


fetch(`https://jsonplaceholder.typicode.com/posts/${parse.id}/comments`)
    .then(value => value.json())
    .then(respond => {
        // console.log(respond)
        let h2 = document.createElement('h1');
        h2.innerText = 'All comments'
        document.body.appendChild(h2)

        for (const element of respond) {

            let div2 = document.createElement('div');
            div2.innerText = `Comment : ${element.body}`
            div2.classList.add('div2')
            document.body.appendChild(div2);
        }

    })