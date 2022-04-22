var submit = document.querySelector('#submit')
var table = document.querySelector('.table')
var got_data = false
submit.addEventListener('click', ()=>{
    axios.get('https://rickandmortyapi.com/api/character/')
    .then((response)=>{
        console.log(response.data.results)
        var r_m_data = response.data.results
        if(got_data === false){
            got_data = true
            table.style.visibility = 'visible'
            r_m_data.forEach((item)=>{
                    var tr = document.createElement('tr')
                    var name = document.createElement('td')
                    var status = document.createElement('td')
                    var species = document.createElement('td')
                    name.innerHTML = item.name
                    status.innerHTML = item.status
                    species.innerHTML = item.species
                    tr.appendChild(name)
                    tr.appendChild(status)
                    tr.appendChild(species)
                    table.appendChild(tr)
                    document.body.style.backgroundColor = "black";
                    submit.innerText = 'Close Data'
            })
        }else{
            table.style.visibility = 'hidden'
            document.body.style.backgroundColor = "white";
            submit.innerText = 'Show Data'
            got_data = false
        }
    })
})