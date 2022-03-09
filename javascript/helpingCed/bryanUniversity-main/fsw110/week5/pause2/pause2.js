var form = document.getElementById('forms')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    var fName = document.getElementById('fName')
    var lName = document.getElementById('lName')
    var age = document.getElementById('age')
    var select = document.getElementById("select")
    var yes = document.getElementById("yes")
    var no = document.getElementById("no")

    // let chk = document.querySelector('input[type="checkbox"]:checked')
    var keto = document.getElementById('keto')
    var gluten = document.getElementById('gluten')
    var vegetarian = document.getElementById('vegetarian')
    
    let str = fName.value + '\n' + lName.value + '\n' + age.value + '\n' + select.value ;
    if (yes.checked == true){
        str += `\n ${yes.value}`
    }
    if (no.checked == true){
        str += `\n ${no.value}`
    }
    if (keto.checked == true){
        str += `\n ${keto.value}`
    }
    if (vegetarian.checked == true){
        str += `\n ${vegetarian.value}`
    }
    if (gluten.checked == true){
        str += `\n ${gluten.value}`
    }
    

    alert(str)
})