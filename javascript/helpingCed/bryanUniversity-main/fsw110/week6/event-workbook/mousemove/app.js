var box = document.querySelector('.red-box') 

box.addEventListener('mousemove',function mouse(e) {
    box.innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`
})