var xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true);
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(xhr.responseText)
        console.log(data.results)
        showData(data)
    } else if (xhr.readyState === 4 && xhr.status !== 200){
        console.log(xhr.responseText)
    }
};


function showData(data){
    data.results.forEach((poke) =>{
     var table = document.createElement('table')
     table.style.border = '1px solid black'
     document.body.appendChild(table)

     var tr = document.createElement('tr')
     table.appendChild(tr)

     var name_th = document.createElement('th')
     name_th.innerHTML = 'Name'
    //  name_th.style.border = '1px solid black'
     tr.appendChild(name_th)

     var url_th = document.createElement('th')
     url_th.innerHTML = 'URL'
    //  url_th.style.border = '1px solid black'
     tr.appendChild(url_th)

     var tr2 = document.createElement('tr')
     table.appendChild(tr2)

     var name_td = document.createElement('td')
    //  name_td.style.border = '1px solid black'
     name_td.innerHTML = poke.name
     tr2.appendChild(name_td)
     
     var url_td = document.createElement('td')
     url_td.innerHTML = poke.url
    //  url_td.style.border = '1px solid black'
     tr2.appendChild(url_td)
     
    })
}
        


        