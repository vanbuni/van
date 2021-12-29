var divs = document.querySelectorAll('div')

// divs.forEach(div =>{
//     div.addEventListener('click', () =>{
//         console.log("Hi");
//     })
// })

addGlobalEventListener('click', 'div', e =>{
    console.log("Hi");
    
})

function addGlobalEventListener(type, selector, callback){
    document.addEventListener(type, e =>{
        if(e.target.matches(selector)) callback(e)
    })
}



const newDiv = document.createElement('div')
newDiv.style.backgroundColor = 'orange'
newDiv.style.width = '200px'
newDiv.style.height = '200px'
document.body.append(newDiv)


// var grandparent = document.querySelector('.grandparent')
// var parent = document.querySelector('.parent')
// var child = document.querySelector('.child')


// grandparent.addEventListener('click', e =>{
//     console.log('grandparent');
// }, {once: true})

// parent.addEventListener('click', sayHi)


// setTimeout(() => {
//     parent.removeEventListener('click', sayHi)
// }, 2000)


// child.addEventListener('click', e =>{
//     console.log('child');
// })

// document.addEventListener('click', e =>{
//     console.log('document');
// })


// function sayHi(){
//     console.log("Hi")
// }




