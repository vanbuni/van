// Create an event listenter for the 'submit' button that calls the combineLists() function
var submit = document.getElementById('submit').addEventListener('click', ()=>{
    combineLists(Raji.value, Huang.value, José.value, Veronica.value)
})

// Modify the combineLists() function to create arrays from each scavenger hunt element in the scavenger.html document. 
// Then use the spread operator to combine these arrays into a single array. 
// Sort that array and display it in the 'AllItems' element on the scavenger.html document.
var Raji = document.querySelector('#scavenger-0')
var Huang = document.querySelector('#scavenger-1')
var José = document.querySelector('#scavenger-2')
var Veronica = document.querySelector('#scavenger-3')
var AllItems = document.querySelector('#AllItems')

function combineLists(Raji, Huang, José, Veronica) {
   var Raji_array = Raji.split(",")
   var Huang_array = Huang.split(",")
   var José_array = José.split(",")
   var Veronica_array = Veronica.split(",")
   var new_array = [...Raji_array, ...Huang_array, ...José_array, ...Veronica_array] 
   AllItems.innerHTML = new_array.sort() 
}

// The following code is a bonus addition that facilitates data entry on the scavenger.html document.
// If you first click in one of the textareas, you can then click scavenger hunt items in the unordered
// list. The value of that will be added to the appropriate textarea along with any necessary commas.

let objTargetText 
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}