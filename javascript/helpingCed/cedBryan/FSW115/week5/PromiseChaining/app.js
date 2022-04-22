//Promise Chaining


axios.get('https://swapi.dev/api/people/1')
.then(res => {
    const homeworldURL = res.data.homeworld
    console.log(homeworldURL)
    return axios.get(homeworldURL)
})
.then(response => axios.get(response.data.films[0]))
.then(res => console.log(res))
.catch(err => console.log(err))

