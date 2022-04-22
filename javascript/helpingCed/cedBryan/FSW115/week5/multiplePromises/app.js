const getAllLukeMovies = async () =>{
    const lukeData = await axios.get("https://swapi.dev/api/people/1")
    const lukeFilms = lukeData.data.films
    const pending = []
    for(let i =0; i < lukeFilms.length; i++){
        pending.push(axios.get(lukeFilms[i]))
    }
    // console.log(pending)
    Promise.all(pending)
    .then(res => showData(res))
    .catch(err => console.log(err))
}
getAllLukeMovies()

const showData = (res) => console.log(res)
// showData()