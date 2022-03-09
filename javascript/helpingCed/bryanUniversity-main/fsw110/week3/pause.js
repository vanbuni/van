for (var i=0; i < 10; i++) {
  const h1 = document.createElement("h1")
  h1.innerHTML = "Hello World";
  h1.style.color = "red";
  document.body.appendChild(h1)
}

const names = ['steve', 'larry', 'joe', 'shirley', 'nate', 'rick', 'emily'];

for (var i=0; i < names.length; i++) {
  var ul = document.createElement('ul')
  document.body.appendChild(ul)
  ul.innerHTML += '<li>' + names[i] + '</li>'
console.log(names[i])
console.log(names[1])
}

