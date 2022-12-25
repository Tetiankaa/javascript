let url = new URL(location.href);
let id = url.searchParams.get("id");

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value =>{
        for (const valueKey in value) {
            const userDiv1 = document.createElement('div');
            userDiv1.classList.add('info')
            if (typeof value[valueKey] !== 'object'){
                userDiv1.innerText = `${valueKey} : ${value[valueKey]}`;
            }else {
                userDiv1.innerText = `${valueKey} :`

                for (const userDivKey in value[valueKey]) {
                    const userDiv2 = document.createElement('div');
                    if (typeof value[valueKey][userDivKey] !== 'object'){
                        userDiv2.innerText = `${userDivKey} : ${value[valueKey][userDivKey]}`;
                    }else {
                        userDiv2.innerText = `${userDivKey} :`

                        for (const userDiv2Key in value[valueKey][userDivKey]) {
                            const userDiv3 = document.createElement('div');
                            if (typeof value[valueKey][userDivKey][userDiv2Key] !== 'object'){
                                userDiv3.innerText = `${userDiv2Key} : ${value[valueKey][userDivKey][userDiv2Key]}`
                            }
                            userDiv2.append(userDiv3)
                        }
                    }
                    userDiv1.append(userDiv2)
                }
            }
            document.body.append(userDiv1 )
        }
    });

let btn = document.createElement('button');
btn.classList.add('btn')
btn.innerText = 'POST OF CURRENT USER'
document.body.append(btn);




btn.onclick = function (){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(resp => resp.json())
        .then(value => {
            // let ul = document.createElement('ul')
            // ul.classList.add('ul')


            for (const post of value) {

                let div = document.createElement('div')
                div.classList.add('divOne')
                div.innerText = `${post.title}  `

                let a = document.createElement('a');
                a.href = `post-details.html?post=`+JSON.stringify(post)
                a.innerText = 'more details';

                div.appendChild(a);
                document.body.appendChild(div)
            }
        })
}