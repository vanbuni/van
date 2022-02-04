const express =require('express');
const app = express();

app.get('/', (req,res) =>{
    console.log('Here');
    res.render(`index`)
    
})

app.listen(3000)

//npm run vanStart 


let array = [1,2,3];

let run = array.forEach((value)=> {
console.log(value);
})

console.log(run);


var obj = {a:1, b:2}


for(let prop in obj){
    console.log(prop);
}

for (let value of array){
    console.log(value);
}