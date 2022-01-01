// const posts = [
//     {title: 'Post one', body: 'This is post one'},
//     {title: 'Post two', body: 'This is post two'},
// ]


// function getPost(){
//     setTimeout(() => {
//          let output = '';
//          posts.forEach((post, index) => {
//              output += `<li>${post.title}</li>`
//          });
//          document.body.innerHTML = output;
//     },1000)
// }


// function createPost(post){
//    setTimeout(() =>{
//      posts.push(post)
//    },2000)
// }


//Not going to get new post because it was created after the getPost()


// getPost();
// createPost({title: 'Post three', body: 'This is post three'})


//******************************************************************************** */

// const posts = [
//     {title: 'Post one', body: 'This is post one'},
//     {title: 'Post two', body: 'This is post two'},
// ]


// function getPost(){
//     setTimeout(() => {
//          let output = '';
//          posts.forEach((post, index) => {
//              output += `<li>${post.title}</li>`
//          });
//          document.body.innerHTML = output;
//     },1000)
// }


// function createPost(post, callback){
//    setTimeout(() =>{
//      posts.push(post)
//      callback()
//    },2000)
// }



//Now getPost is the callback(), so it waits until createPost() has finished running

// createPost({title: 'Post three', body: 'This is post three'}, getPost)





//******************************************************************************** */


// const posts = [
//     {title: 'Post one', body: 'This is post one'},
//     {title: 'Post two', body: 'This is post two'},
// ]


// function getPost(){
//     setTimeout(() => {
//          let output = '';
//          posts.forEach((post, index) => {
//              output += `<li>${post.title}</li>`
//          });
//          document.body.innerHTML = output;
//     },1000)
// }


// function createPost(post){
//     return new Promise((resolve, reject) =>{

//         setTimeout(() =>{

//           posts.push(post)

//           const error = false;

//           if(!error){
//               resolve()
//           }else{
//               reject('Error: Something went wrong')
//           }

//         },2000)
//     })
// }


//createPost() returns a promise, when promise is resolved, getPost() is ran

// createPost({title: 'Post three', body: 'This is post three'})
//     .then(getPost)
//     .catch(err => console.log(err));



//******************************************************************************** */




// const promise1 = Promise.resolve('Hello');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 2000, 'Goodbye')
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())

// Promise.all([promise1, promise2, promise3, promise4])
//     .then((values) => console.log(values))



//******************************************************************************** */

// const posts = [
//     {title: 'Post one', body: 'This is post one'},
//     {title: 'Post two', body: 'This is post two'},
// ]


// function getPost(){
//     setTimeout(() => {
//          let output = '';
//          posts.forEach((post, index) => {
//              output += `<li>${post.title}</li>`
//          });
//          document.body.innerHTML = output;
//     },1000)
// }


// function createPost(post){
//     return new Promise((resolve, reject) =>{

//         setTimeout(() =>{

//           posts.push(post)

//           const error = false;

//           if(!error){
//               resolve()
//           }else{
//               reject('Error: Something went wrong')
//           }

//         },2000)
//     })
// }


// async function init(){
//     await createPost({title: 'Post three', body: 'This is post three'})


//     getPost()
// }

// init()




//******************************************************************** */

async function fetchUsers(){
    var res = await fetch
    ('https://jsonplaceholder.typicode.com/users')

    const data = await res.json();

    console.log(data);
}


fetchUsers();

