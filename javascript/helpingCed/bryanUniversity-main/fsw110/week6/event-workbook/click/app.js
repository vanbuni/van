// make the box disapear when the user clicks it

var box = document.querySelector('.red-box') 

box.addEventListener('click', function clear() {
    box.remove()
}) 