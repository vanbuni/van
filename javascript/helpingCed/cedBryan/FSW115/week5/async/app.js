const getData = async () => {
    let result;
    try{
        result = await axios.get('https://swapi.dev/api/people/1')
        var homeworld = await axios.get(result.data.homeworld)
        const film = await axios.get(homeworld.data.films[0])
        displayData(homeworld,film)
    }
    catch(error){
        console.log(error)
    }
}
getData()
    
    
    

const displayData = (homeworld,film) =>{
    console.log(homeworld)
    const h1 = document.createElement('h1')
    h1.textContent = homeworld.data.name
    document.body.appendChild(h1)
    const h2 = document.createElement('h2')
    h2.textContent = film.data.title
    document.body.appendChild(h2)
}

// .then(res => {
//     const homeworldURL = res.data.homeworld
//     console.log(homeworldURL)
//     return axios.get(homeworldURL)
// })
// .then(response => axios.get(response.data.films[0]))
// .then(res => console.log(res))
// .catch(err => console.log(err))