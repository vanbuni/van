var container = document.querySelector('#div_container')
var input1 = document.querySelector('#input1')
var input2 = document.querySelector('#input2')
var submit = document.querySelector('#submit')
var editToggle = false

function getTodos(){
    axios.get("http://api.bryanuniversity.edu/cedrickwilliams/list/")
    .then(response =>{
      console.log('got_todos')
      showData(response.data) 
    })
    .catch(error => console.log(error))
  }

function showData(data){
    data.forEach((item)=>{
      console.log(item)
   
      
      
      
  
      var newDiv = document.createElement('div')
      if (editToggle === false){
        var deleteBtn = document.createElement('button')
        var newH6 = document.createElement('h6')
        var description_text = document.createElement('h5')
        var trueOrFalse = document.createElement('h6')
        var newSpan = document.createElement('span')
        var description = document.createElement('span')
        var is_Complete = document.createElement('span')
        var isComplete_text = document.createElement('input')
        isComplete_text.setAttribute("type", "checkbox")
        var edit = document.createElement('button')
        newH6.innerText = `${item.name} \n`
        description_text.innerText = `${item.description} \n`
        trueOrFalse.innerText = `${item.isComplete} \n`
        newSpan.innerText = "Title: "
        description.innerText = "Description: " 
        is_Complete.classList.add('red')
        is_Complete.innerText = "Is Complete:"
        deleteBtn.innerText = "Delete"
        deleteBtn.addEventListener('click', () => {
          axios.delete(`http://api.bryanuniversity.edu/cedrickwilliams/list/${item._id}`)
          .then((response) => {
            console.log(response);
            setTimeout(window.location.reload(), 50)
          }).catch((err) =>{
            console.log(err);
          })
        })
        style(newDiv,newSpan,newH6,description,description_text,is_Complete,trueOrFalse,isComplete_text,deleteBtn,edit)
      }
      if(editToggle === true){
        var todo_text = document.createElement('input')
        var description = document.createElement('input')
        var edit = document.createElement('button')
        var deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"
        edit.innerText = 'Save'
        newDiv.appendChild(todo_text)
        newDiv.appendChild(description)
        newDiv.appendChild(edit)
        newDiv.appendChild(deleteBtn)
        todo_text.value = item.name
        description.value = item.description
      }
      editTodo(edit, data,todo_text, description,item._id)
      
      

      
      
      


      if (item.isComplete === true) {
        trueOrFalse.style.textDecoration = "line-through"
    }
      
      isComplete_text.addEventListener('change', ()=> {
          if (item.isComplete === false) {
              axios.put(`http://api.bryanuniversity.edu/cedrickwilliams/list/${item._id}`,{"isComplete": true})
              .then(()=>{
                setTimeout(window.location.reload(), 50)
              })
        
          }
          if (item.isComplete === true){
              axios.put(`http://api.bryanuniversity.edu/cedrickwilliams/list/${item._id}`,{"isComplete": false})
              .then(()=>{
                setTimeout(window.location.reload(), 50)
              })
        
          }      
        })

      
      var elementArr = [deleteBtn]
      elementArr.forEach((item) =>{
          newDiv.appendChild(item)
      })
    })
  }
  submit.addEventListener('click', ()=> {
    newToDo = {
      name: input1.value, 
      description: input2.value,
      isComplete: false    
    }
    axios.post('http://api.bryanuniversity.edu/cedrickwilliams/list/', newToDo)
    .then((response)=>{
      console.log(response);
      getTodos()
      input1.value = ""
      input2.value = ""
    }).catch((err) => {
      console.log(err);
    })
    
  })
  function style(newDiv,newSpan,newH6,description,description_text,is_Complete,trueOrFalse,isComplete_text,deleteBtn,edit) {
      
      newDiv.style.border = '1px solid black'
      newDiv.style.width = '180px'
      container.appendChild(newDiv)
      edit.innerText = 'Edit'
      var arr = [newSpan,newH6,description,description_text,is_Complete,trueOrFalse,isComplete_text,deleteBtn,edit]
      arr.forEach((item)=> {
        newDiv.appendChild(item)
      })
     
  }
  function editTodo(edit, data,todo_text, description,id){

    edit.addEventListener('click', ()=>{
      if(editToggle === false){
        console.log('click');
        editToggle = !editToggle
        getTodos()
        showData(data)
      }
      else if(editToggle === true){
        console.log(todo_text.value)
        axios.put(`http://api.bryanuniversity.edu/cedrickwilliams/list/${id}`, {'name': todo_text.value, 'description': description.value, 'isComplete': false})
        .then(()=>{
          setTimeout(window.location.reload(), 1000)
        })
      }
    })
  }
  getTodos()
//   showData()