


var to_do = document.getElementById('to-do')
var des = document.getElementById('des')
var add_todo = document.getElementById('add_todo')

editToggle = false

// const axios = require('axios')
var container = document.getElementById('container')
function getTodos(){
  axios.get("http://api.bryanuniversity.edu/lavanbradley/list")
  .then(response =>{
    console.log('got todos')
    showData(response.data)
    
  })
  .catch(error => console.log(error))
  
}
getTodos()
function showData(data){
  container.innerHTML = ''

  header = false
  data.forEach((todo) =>{
  if(header === false){
  var h3 = document.createElement('h3')
  var first = todo.user.slice(1,5)
  var fir_letter =todo.user.charAt(0).toUpperCase()
  var last = todo.user.slice(6,13)
  var last_letter = todo.user.charAt(5).toUpperCase()
  h3.innerHTML = `User: ${fir_letter}${first} ${last_letter}${last}`
  container.appendChild(h3)
  }
  header = true
  // editToggle 
  
  
  var todo_div = document.createElement('div')
  var complete = document.createElement('h5')
  var date = document.createElement('h6')
  var new_date = todo.createdAt.slice(0,10)
  var done = document.createElement('button')
  var del = document.createElement('button')
  
  
  
  
  if(editToggle === false){
    var todo_text = document.createElement('h5')
    var description = document.createElement('h5')
    todo_div.appendChild(todo_text)
    todo_div.appendChild(description)
    todo_text.innerHTML = `Todo: ${todo.name}`
    description.innerHTML = `Description: ${todo.description}`
    complete.innerHTML = `Complete ${todo.isComplete}`
    date.innerHTML = `Date ${new_date}`
    var edit = document.createElement('button')
    edit.style.color = 'green'
    edit.innerHTML = 'EDIT'
    todo_div.appendChild(edit)
  }
  if(editToggle === true){
    var todo_text = document.createElement('input')
    var description = document.createElement('input')
    todo_div.appendChild(todo_text)
    todo_div.appendChild(description)
    todo_text.value = todo.name
    description.value = todo.description
    complete.innerHTML = `Complete ${todo.isComplete}`
    date.innerHTML = `Date ${new_date}`
    var edit = document.createElement('button')
    edit.style.color = 'green'
    edit.innerHTML = 'SAVE'
    todo_div.appendChild(edit)
    
  }
  if(todo.isComplete === true){
    complete.style.textDecoration = 'line-through'
  } 
  if(todo.isComplete === false){
    complete.style.textDecoration = 'none'
  } 
  style(done,todo_div, del,container, complete, date)
  delete_todo(del, todo._id, todo_div, container, h3)
  complete_todo(done, todo._id, todo.isComplete)
  editTodo(edit, data, todo_text, description, todo._id)
})
}
function editTodo(edit, data,todo_text, description,id){

  edit.addEventListener('click', ()=>{
    if(editToggle === false){
      editToggle = !editToggle
      getTodos()
      showData(data)
    }
    else if(editToggle === true){
      console.log(todo_text.value)
      axios.put(`http://api.bryanuniversity.edu/lavanbradley/list/${id}`, {'name': todo_text.value, 'description': description.value, 'isComplete': false})
      .then(()=>{
        setTimeout(window.location.reload(), 1000)
      })
    }
  })
}
function style(done,todo_div, del, container, complete, date){
  
  todo_div.appendChild(complete)

  todo_div.appendChild(date)
  
  done.style.color = 'yellow'
  done.innerHTML = 'COMPLETE'
  todo_div.appendChild(done)

  todo_div.style.border = '1px solid black'
  todo_div.style.width = '160px'
  container.appendChild(todo_div)

  del.style.color = 'red'
  del.innerHTML = 'DELETE'
  todo_div.appendChild(del)

  
  
}
  
function delete_todo(del, id, element, div, h3){
  del.addEventListener('click',()=>{
    axios.delete(`http://api.bryanuniversity.edu/lavanbradley/list/${id}`)
    div.removeChild(element)
    div.removeChild(h3)
    getTodos()
    showData()
  })
}
function complete_todo(done, id, complete){
  done.addEventListener('click', ()=>{
    if(complete === false){
      axios.put(`http://api.bryanuniversity.edu/lavanbradley/list/${id}`, {"isComplete": true})
      getTodos()
      
    }
    if(complete === true){
      axios.put(`http://api.bryanuniversity.edu/lavanbradley/list/${id}`, {"isComplete": false})
      getTodos()
    }
    
    
  })
  
}

add_todo.addEventListener('click', ()=>{
  var newTodo ={
    name: to_do.value,
    description: des.value,
    isComplete: false

  }
  axios.post('http://api.bryanuniversity.edu/lavanbradley/list/', newTodo)
.then(response =>{
  console.log(response)
  to_do.value = ''
  des.value = ''
  
  getTodos()
})
})

      
      
      
      
      
