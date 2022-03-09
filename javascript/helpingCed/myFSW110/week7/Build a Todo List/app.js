let todoArr = []
let todoList = document.getElementById('todoList')
let title = document.getElementById('title')
let description = document.getElementById('description')
let btn = document.getElementById('btn')
let todo_div = document.getElementById('todo_div')

function createTodo(arr){
        todo_div.innerHTML = ''
        todo_div.style.visibility = 'visible'
        arr.forEach((todo,id)=>{
        console.log('Todo:', todo)
        console.log('ID:', id)
        let todo_list_div = document.createElement('div')
        todo_list_div.style.border = '1px solid black'
        todo_list_div.style.marginTop = '5px'
        todo_div.appendChild(todo_list_div)
        let title_li = document.createElement('li')
        let description_li = document.createElement('li')
        let done_btn = document.createElement('button')
        let delete_btn = document.createElement('button')
        delete_btn.innerHTML = 'DELETE'
        done_btn.innerHTML = 'COMPLETE'
        title_li.innerHTML = `Title: ${todo.Title}`
        description_li.innerHTML = `Description: ${todo.Description}`
        title_li.style.listStyleType = 'none'
        description_li.style.listStyleType = 'none'
        todo_list_div.appendChild(title_li)
        todo_list_div.appendChild(description_li)
        todo_list_div.appendChild(done_btn)
        todo_list_div.appendChild(delete_btn)
        title.value =''
        description.value =''
        delete_btn.addEventListener("click", () =>{
            deleteTodo(id)
        })
        done_btn.addEventListener("click", () =>{
            title_li.style.textDecoration = 'line-through'
            description_li.style.textDecoration = 'line-through'
        })
    })
}




btn.addEventListener('click', ()=>{
    todoArr.push({'Title' :title.value, 'Description': description.value})
    console.log(todoArr)
    createTodo(todoArr)
})
function deleteTodo(index){
    todoArr.splice(index, 1)
    console.log(todoArr)
    todoList.innerHTML = ''
    createTodo(todoArr)
}












// function createTodo(arr){
//     arr.forEach((todo,id)=>{
//         let list = document.createElement('li')
//         let title_span = document.createElement('span')
//         let description_span = document.createElement('span')
//         let btn = document.createElement('button')

//         title_span.innerHTML = title.value
//         description_span.innerHTML = description.value
//         btn.innerHTML = 'DELETE'

//         btn.addEventListener("click", () =>{
//             deleteTodo(id)
//         })

//         list.appendChild(title_span)
//         list.appendChild(description_span)
//         list.appendChild(btn)
//         todoList.appendChild(list)
//         todoArr.push(list,title_span,description_span,btn)
//     })
// }

// function deleteTodo(index){
//     todoArr.splice(index, 1)
//     createTodo(todoArr)
// }
// window.addEventListener("load", () =>{
//     createTodo(todoArr)
// })
// btn.addEventListener('click', ()=>{
//     createTodo()
// })


