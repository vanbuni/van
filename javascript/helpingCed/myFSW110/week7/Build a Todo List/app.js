let todoArr = []
let todoList = document.getElementById('todoList')
let title = document.getElementById('title')
let description = document.getElementById('description')
let btn = document.getElementById('btn')
let todo_div = document.getElementById('todo_div')
description.style.marginTop = '10px'


function createTodo(arr){
        
        todo_div.innerHTML = ''
        todo_div.style.visibility = 'visible'
        arr.forEach((todo,id)=>{
       
        let todo_list_div = document.createElement('div')
        todo_list_div.style.border = '1px solid black'
        todo_list_div.style.marginTop = '5px'
        todo_div.appendChild(todo_list_div)
        let title_li = document.createElement('li')
        let description_li = document.createElement('li')
        let completed_li = document.createElement('li')
        let done_btn = document.createElement('button')
        let delete_btn = document.createElement('button')
        delete_btn.innerHTML = 'DELETE'
        done_btn.innerHTML = 'COMPLETE'
        title_li.innerHTML = `Title: ${todo.Title}`
        description_li.innerHTML = `Description: ${todo.Description}`
        completed_li.innerHTML = `Completed: ${todo.Completed}`
        title_li.style.listStyleType = 'none'
        description_li.style.listStyleType = 'none'
        completed_li.style.listStyleType = 'none'
        if (todo.Completed === 'Complete'){
            title_li.style.textDecoration = 'line-through'
            description_li.style.textDecoration = 'line-through'
                
        }
        todo_list_div.appendChild(title_li)
        todo_list_div.appendChild(description_li)
        todo_list_div.appendChild(completed_li)
        todo_list_div.appendChild(done_btn)
        todo_list_div.appendChild(delete_btn)
        title.value =''
        description.value =''
        delete_btn.addEventListener("click", () =>{
            deleteTodo(id)
        })
        done_btn.addEventListener("click", () =>{
            
            
            
            
            if (todo.Completed === 'Not Completed'){
                todo.Completed = 'Complete'
                completed_li.innerHTML = `Completed: ${todo.Completed}`
                title_li.style.textDecoration = 'line-through'
                description_li.style.textDecoration = 'line-through'
                
            }
            else if (todo.Completed === 'Complete'){
            todo.Completed = 'Not Completed'
            completed_li.innerHTML = `Completed: ${todo.Completed}`
            title_li.style.textDecoration = 'none'
            description_li.style.textDecoration = 'none'
            }
        })
        
    })
}




btn.addEventListener('click', ()=>{
    todoArr.push({'Title' :title.value, 'Description': description.value, Completed: 'Not Completed'})
    
    createTodo(todoArr)
})
function deleteTodo(index){
    todoArr.splice(index, 1)
    
    todoList.innerHTML = ''
    createTodo(todoArr)
}



