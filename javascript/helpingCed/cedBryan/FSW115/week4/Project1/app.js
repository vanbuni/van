

var submit = document.querySelector('#sub')
var table = document.querySelector('.table')
var got_data = false

submit.addEventListener('click',()=>{
    if(got_data === false){
        got_data = true
        table.style.visibility = 'visible'
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then((response)=>{
            console.log(response.data.results)
            response.data.results.forEach((poke)=>{
                var tr = document.createElement('tr')
                var name = document.createElement('td')
                var url = document.createElement('td')
                name.innerHTML = poke.name
                url.innerHTML = poke.url
                tr.appendChild(name)
                tr.appendChild(url)
                table.appendChild(tr)
                document.body.style.backgroundColor = "black";
                submit.innerText = 'Close Data'
            })
        })
    }else{
        table.style.visibility = 'hidden'
        document.body.style.backgroundColor = "white";
        submit.innerText = 'Show Data'
        got_data = false
    }
})