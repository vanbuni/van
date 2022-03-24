// XMLHttpRequest

//How do we create a request (xhr)
//What part of this object are important to our request

//xhr.onreadystatechange
//xhr.readyState
//xhr.status


const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        
    }
}



//xhr.readyState   
    // 1 - request has been sent
    // 2
    // 3
    // 4

// xhr.status
    // 200 - everything went well
    // 404 not found
    // 201 processed successfully
    // 500 server broke
