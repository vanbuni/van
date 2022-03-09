const h2Elements = ['Netflix', 'Hulu', 'Amazon', 'HBO', 'Google'];


for (var i=0; i < h2Elements.length; i++) {
  var ul = document.createElement('ul')
  var h2 = document.createElement('h2')
  h2.classList.add("border")
  h2.innerText = h2Elements[i]
  document.body.appendChild(ul)
  ul.appendChild(h2)
  console.log(h2Elements[i])
  console.log(h2Elements[1])
}



