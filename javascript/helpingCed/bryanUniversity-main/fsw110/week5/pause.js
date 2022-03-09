
var form = document.getElementById('form')
form.addEventListener("submit", (e) => {  
    e.preventDefault()
    var name = document.getElementById("name") 
    var number = document.getElementById("number")
    var email = document.getElementById("email")
    str = `Name: ${name.value} \n  Number: ${number.value}  \n  Email: ${email.value}`;
    alert(str);
    name.value = ''
    number.value = ''
    email.value = ''
    

})