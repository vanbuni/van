var h1 = document.createElement("h1");
h1.textContent= "Welcome to my JS site";
document.body.appendChild(h1);

var para = document.createElement("p");
para.textContent = "All of this was created with Javascript";
document.body.appendChild(para);

var orderList = document.createElement('ol')
 var li1 = document.createElement('li')
 var li2 = document.createElement('li')
 var li3 = document.createElement('li')
 li1.textContent = " Apples"
 li2.textContent = " Oranges"
 li3.textContent = " Bananas"
 orderList.appendChild(li1)
 orderList.appendChild(li2)
 orderList.appendChild(li3)
 document.body.appendChild(orderList)
 