var pass = document.getElementById('pass')
var btn = document.getElementById('btn')
var res = document.querySelector('.res')

btn.addEventListener('click', ()=>{
    res.innerHTML = pass.value
})
console.log(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5));


function getRandomInt(min, max){
    return Math.random() 

}