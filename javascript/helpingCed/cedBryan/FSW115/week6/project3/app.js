var movie = document.querySelector('.movie')


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

const showData = (res) => {
    for(i =0; i < res.length; i++){
        
            var title = document.createElement('h1')
            var episode = document.createElement('span')
            var producer = document.createElement('span')
            var director = document.createElement('span')
            var release_date = document.createElement('span')
            // var opening_crawl = document.createElement('p')
            var button = document.createElement('button')
            var newDiv = document.createElement('div')
            styling(res,title,episode,producer,director,release_date,button,newDiv)
            crawl(res,button,i)
            
        
      
    }
}

const styling = (res,title,episode,producer,director,release_date,button,newDiv) =>{
    
    title.innerText = res[i].data.title
    title.style.color = 'yellowGreen'
    newDiv.appendChild(title)
    episode.innerText = `Episode ID: ${res[i].data.episode_id}`
    episode.style.color = 'yellowGreen'
    newDiv.appendChild(episode)
    producer.innerText = `Producer: ${res[i].data.producer}`
    producer.style.color = 'yellowGreen'
    newDiv.appendChild(producer)
    director.innerText = `Director: ${res[i].data.director}`
    director.style.color = 'yellowGreen'
    newDiv.appendChild(director)
    release_date.innerText = `Release_date: ${res[i].data.release_date}`
    release_date.style.color = 'yellowGreen'
    newDiv.appendChild(release_date)
    button.innerHTML = 'OPENING_CRAWL'
    button.style.backgroundColor = 'yellowGreen'
   
    newDiv.appendChild(button)
    movie.style.color = 'yellowGreen'
    movie.appendChild(newDiv)

}
const crawl = (res,button,i)=>{
    var clicked = false
    let title
    button.addEventListener('click',()=>{
        if(clicked === false){
            clicked = true
            movie.innerHTML = ''
            movie_title = document.createElement('h1')
            movie_title.innerText = res[i].data.title
            var open =  res[i].data.opening_crawl
            movie.style.border = 'none'
            movie.appendChild(movie_title)
            movie.innerText +=  `\n \n  ${open}`
            button.innerHTML = 'GO BACK'
            movie.appendChild(button)
        }
        else{
         document.location.reload() 
        }
       
     })
    }
            
        
        
        
