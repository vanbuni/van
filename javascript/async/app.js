
// console.log('Synchronous 1');

// setTimeout(_ => console.log(`Timeot 2`), 0)

// Promise.resolve().then(_ => console.log('Promise 3'))

// console.log('Synchronous 4');





const promise = fetch('https://jsonplaceholder.typicode.com/posts/1')
// promise
//     .then(res => res.json())
//     .then(user => console.log(user))



// console.log('Synchronous');

// promise
//     .then(res => res.json())
//     .then(user => {
//         throw new Error;
//         return user;
//     })
//     .then(user => console.log(user))
//     .catch(err => console.log(err + ' u sexy'))


//     console.log('Synchronous');



// #ASYNC TIME



//Basic 

const getFruit = async(name) => {
   const fruit = {
       1: 'Apple',
       2: 'Bannana',
       3: 'Grapes'
   }
   return fruit[name]
}
console.log(getFruit);

    
