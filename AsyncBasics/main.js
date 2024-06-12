//Why Async
const posts = [
    { title: 'JS Basics', summary: 'This is JS Basics' },
    { title: 'DOM Basics', summary: 'This is DOM Basics' }
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => output += `<h4>${post.title}</h4><p>${post.summary}</p>`);
        document.body.innerHTML = output;
    }, 1000)
}

// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000)
// }

// getPosts()
// createPost({ title: 'Async Basics', summary: 'This is Async Basics'})

//Async JS - callback
// function createPost(post, fn) {
//     setTimeout(() => {
//         posts.push(post)
//         fn()
//     }, 2000)
// }

// createPost({ title: 'Async Basics', summary: 'This is Async Basics'}, getPosts)

//Async JS - Promises
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const num = 5;
            num > 4 ? resolve() : reject('Error: Something is wrong')
        }, 2000)
    })
}

//then..catch
// createPost({ title: 'Async Basics', summary: 'This is Async Basics'})
//         .then(getPosts)
//         .catch(err => document.body.innerHTML = `${err}`)

//Async..await
// async function init(){
//     try {
//         await createPost({ title: 'Async Basics', summary: 'This is Async Basics'})
//         getPosts();
//     } catch (error) {
//         document.body.innerHTML = `${error}`
//     }
// }

// init()

//Fetch API
async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();
    let output = '';
    posts.forEach(post => output += `<h2>${post.title}</h2><p>${post.body}</p>`);
    document.body.innerHTML = output;
}

getPosts()