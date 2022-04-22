var container = document.querySelector('.container')
var container2 = document.querySelector('.container2')
var editToggle = false

    
  const getData = async () =>{
      const rick_and_morty_data = await axios.get("https://rickandmortyapi.com/api/character")
      const cartoon_data = rick_and_morty_data.data.results
      const pending1 = []
      for(i = 0; i < cartoon_data.length; i++){
          pending1.push(cartoon_data[i])
        }
        Promise.all(pending1)
        .then(console.log(pending1))
        .then(showData(pending1))
        .catch(err => console.log(err))
  }
  getData()

  const showData = (pending1) =>{
    for(i = 0; i < pending1.length; i++){
        var newDiv = document.createElement('div')
        var img = document.createElement('img')
        var name = document.createElement('h1')
        var gender =document.createElement('h4')
        var species = document.createElement('h4')
        var status =document.createElement('h4')
        var add_character = document.createElement('button')
        newDiv.style.width = '300px'
        newDiv.style.textAlign = 'center'
        

          img.src = pending1[i].image
          name.innerText = pending1[i].name
          gender.innerText = `Gender: ${pending1[i].gender}`
          species.innerText = `Species: ${pending1[i].species}`
          status.innerText = `Status: ${pending1[i].status}`
          add_character.innerText = 'Save Character'
        
      
        var arr = [name,img,gender,species,status,add_character]
        container.appendChild(newDiv)
    
        arr.forEach((element)=>{
          newDiv.appendChild(element)
        })
        save(add_character,name,img)
    }
  }

  const save = (button,name,img) => {
      
      var newPost = {
          name: name.innerText,
          description: img.src,
          isComplete: false
      }
    button.addEventListener('click',() => {
        axios.post("http://api.bryanuniversity.edu/lavanbradley/list", newPost)
        .then(response => {
          console.log(response)
          button.innerText = 'Added'
        })
        .catch(err => console.log(err))
    })
  }


  const getTodos = () => {
    axios.get("http://api.bryanuniversity.edu/lavanbradley/list")
    .then(response => {
        showTodos(response.data)
    })
  }
  getTodos()

  const showTodos = (response) =>{
    container2.innerHTML = ''
    for(i = 0; i < response.length; i++){
      var newDiv = document.createElement('div')
      var description = document.createElement('img')
      var alive = document.createElement('span')
      var completed = document.createElement('span')
      var kill = document.createElement('button')
      var edit = document.createElement('button')
      var delete_todo = document.createElement('button')
      
      if(!editToggle){
        if(response[i].isComplete === true){
          var rip = document.createElement('span')
          rip.innerText = 'R.I.P'
          newDiv.appendChild(rip)
        }
        var name = document.createElement('h1')
        name.innerText = response[i].name
        description.src = response[i].description
        alive.innerText = 'Status: '
        edit.innerText = 'EDIT'
        kill.innerText = 'KILL'
        kill.style.backgroundColor = 'red'
        delete_todo.innerText = 'DELETE'
        newDiv.appendChild(name)
        
      }
    if(editToggle){
      var name = document.createElement('input')
      name.value = response[i].name
      newDiv.appendChild(name)
      alive.innerText = 'Status: '
      kill.innerText = 'KILL'
      kill.style.backgroundColor = 'red'
      name.innerText = response[i].name
      description.src = response[i].description
      edit.innerText = 'EDIT'
      delete_todo.innerText = 'DELETE'
    }
      
      
      
        container2.appendChild(newDiv)
        var arr = [description, alive,completed,edit,delete_todo,kill]
        arr.forEach((element)=>{
          if(response[i].isComplete === false){
            completed.innerText = 'Alive'
          }else{
            completed.innerText = 'Dead'
            newDiv.style.backgroundColor = 'red'
          }
          newDiv.appendChild(element)
        })
          killCharacter(kill,response[i]._id)
          editTodo(edit,response,name,response[i]._id,newDiv)
          deleteTodo(delete_todo,response[i]._id)
        }
      }
        

function deleteTodo(button,id){
  button.addEventListener('click',()=>{
    axios.delete(`http://api.bryanuniversity.edu/lavanbradley/list/${id}`)
    .then(()=> {
      getTodos()
      showTodos()
    })
    .catch((err) => console.log(err))
  })
}


function editTodo(button,response,name,id){
  
  button.addEventListener('click',() =>{
    if(editToggle === false){
      editToggle = !editToggle
      getTodos()
    showTodos(response)
    }
    else if(editToggle === true){
      axios.put(`http://api.bryanuniversity.edu/lavanbradley/list/${id}`, {'name': name.value})
      .then(()=>{
        setTimeout(window.location.reload(), 50)
      })
    }
  })
}

function killCharacter(kill,id){
  kill.addEventListener('click',()=>{
    axios.put(`http://api.bryanuniversity.edu/lavanbradley/list/${id}`, {'isComplete': true})
    .then(()=>{
      setTimeout(window.location.reload(), 1000)
    })
  })
}
    
    
    

