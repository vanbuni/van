// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
var amount_of_bugs = 0

var listWrapper = document.querySelector('#listWrapper')
class Bug {
    constructor() {
        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc
        this.reportedBy ,
        this.system ,
        this.subSystem ,
        this.bugDesc 

    }

    addBug() {
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
        var user_input = document.createElement('div')
        user_input.innerText = bugDesc
        listWrapper.appendChild(user_input)
        var deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = 'x'
        var resoleBtn = document.createElement('button')
        resoleBtn.innerHTML = 'Resolve'
        var arr = [deleteBtn,resoleBtn].forEach(i => user_input.appendChild(i))
        deleteBtn.addEventListener('click',()=>{this.deleteBug(user_input)})
        resoleBtn.addEventListener('click',()=>{this.resolveBug(user_input)})
    }

    deleteBug(user_input) {
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
        user_input.remove()
    }

    resolveBug(user_input) {
        // Create code that changes the appropriate bug report to a darker color
        user_input.style.backgroundColor = 'red'
    }
}

function reportBug() {
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
    var reportedBy_input = document.querySelector('#reportedBy')
    var system_input = document.querySelector('#system')
    var subSystem_input = document.querySelector('#subSystem')
    var bugDesc_input = document.querySelector('#bugDesc')
    var new_bug = new Bug(
        reportedBy_input.value,
        system_input.value,
        subSystem_input.value,
        bugDesc_input.value
    )
}
