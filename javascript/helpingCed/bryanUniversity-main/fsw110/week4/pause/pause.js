var square = document.getElementById('div_one')

window.addEventListener("load", ()=>{
    square.style.backgroundColor = "black"
})

square.addEventListener("mouseover", ()=> {
    square.style.backgroundColor = "green"
})

square.addEventListener("mousedown", () => {
    square.style.backgroundColor = "yellow"
})

square.addEventListener("mouseup", () => {
    square.style.backgroundColor = "blue"
})

square.addEventListener("dblclick", () => {
    square.style.backgroundColor = " red"
})

window.addEventListener("scroll", () => {
    square.style.backgroundColor = "purple"
})

/*square.addEventListener("keydown", (e) => {
    if(e.target.value = "66"){
        square.style.backgroundColor = "black"
    }else if(e.target.value = "71"){
        square.style.backgroundColor = "green"

    }else if(e.target.value = "89"){
        square.style.backgroundColor = "yellow"

    }else if(e.target.value = "82"){
        square.style.backgroundColor = "red"

    }else if(e.target = "80"){
        square.style.backgroundColor = "purple"
    }
})
*/
window.addEventListener("keydown", keyPress, false)

function keyPress (key){
    if(key.keyCode == "66"){
        square.style.backgroundColor = "black"
    }if(key.keyCode == "71"){
        square.style.backgroundColor = "green"

    }if(key.keyCode =="89"){
        square.style.backgroundColor = "yellow"

    }if(key.keyCode == "82"){
        square.style.backgroundColor = "red"

    }if(key.keyCode == "80"){
        square.style.backgroundColor = "purple"
    }
}