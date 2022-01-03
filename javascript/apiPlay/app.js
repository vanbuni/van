var result = document.getElementById('result')
var choice = document.querySelector('.choice')
var input = document.getElementById('input')
var form = document.querySelector('#form')
async function fetchUsers(){
    var res = await fetch
    ('https://jsonplaceholder.typicode.com/users')

    const data = await res.json();

    console.log(data);
    console.log(data[0].name);
    var val = input.value

    choice.addEventListener('click', (e) =>{
        e.preventDefault()
        console.log(data[input.value].name);
        console.log(e.target.value)
        console.log(input.value)
        result.innerHTML = data[input.value].name + ' ' +  data[input.value].email
    })
}


fetchUsers();