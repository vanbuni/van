var addBtn = document.getElementById('add')
var subBtn = document.getElementById('sub')
var multBtn = document.getElementById('mult')
var divBtn = document.getElementById('div')
var clearBtn = document.getElementById('clear')
var res = document.getElementById('res')
var addNum1 = document.getElementById('add1')
var addNum2 = document.getElementById('add2')
var subNum1 = document.getElementById('sub1')
var subNum2 = document.getElementById('sub2')
var multNum1 = document.getElementById('mult1')
var multNum2 = document.getElementById('mult2')
var divNum1 = document.getElementById('div1')
var divNum2 = document.getElementById('div2')

addBtn.addEventListener('click', function addition(){
    res.innerHTML = Number(addNum1.value) + Number(addNum2.value)
})
//sub 
subBtn.addEventListener('click', function subtraction(){
    res.innerHTML = Number(subNum1.value) - Number(subNum2.value)
})
// mult *
multBtn.addEventListener('click', function multiplication(){
    res.innerHTML = Number(multNum1.value) * Number(multNum2.value)
})
//div /
divBtn.addEventListener('click', function division(){
    res.innerHTML = Number(divNum1.value) / Number(divNum2.value)
})

//clear//
document.getElementById("clear").style.backgroundColor = "blue";
document.getElementById("res").style.backgroundColor = "darkred";
document.getElementById("add").style.backgroundColor = "darkred";
document.getElementById("sub").style.backgroundColor = "darkred";
document.getElementById("div").style.backgroundColor = "darkred";
document.getElementById("mult").style.backgroundColor = "darkred";



clearBtn.addEventListener('click', function clear() {
    addNum1.value = ""
    addNum2.value = ""
    subNum1.value = ""
    subNum2.value = ""
    multNum1.value = ""
    multNum2.value = ""
    divNum1.value = ""
    divNum2.value = ""
})