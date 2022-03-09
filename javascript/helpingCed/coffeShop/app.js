var coffee_amount = document.getElementById('coffee_amount')
var banana_amount = document.getElementById('banana_amount')
var bagel_amount = document.getElementById('bagel_amount')
var order_form = document.getElementById('order_form')
var coffee_details = document.getElementById('coffee_details')
var bagel_details = document.getElementById('bagel_details')
var banana_details = document.getElementById('banana_details')

var coffee_cost = 7.50
var  bagel_cost = 3.50
var banana_cost = 2
var order_prep = document.getElementById('order_prep')
var customer = document.getElementById('name')
var popUp = document.getElementById('popUp')
// popUp.style.display = 'none'





function ready(){
    
    popUp.style.visibility = 'visible'
    popUp.style.marginLeft = '700px'
    popUp.style.width = '200px'
    order_prep.innerHTML = `${customer.value}, Your Order Is Ready`
    order_form.style.visibility = 'visible'
    customer.value = ''
}



order_form.addEventListener('submit', (e) =>{
    e.preventDefault()
    coffee_total_cost = coffee_amount.value * coffee_cost 
    bagel_total_cost = bagel_amount.value * bagel_cost 
    banana_total_cost = banana_amount.value * banana_cost 
    cost = coffee_total_cost + banana_total_cost + bagel_total_cost
    // order_total.innerHTML = `Your Order Total is: ${cost}`
    order_form.style.visibility = 'hidden'
    var coffee_recept = '';
    var bagel_recept = '';
    var banana_recept = '';
    if(coffee_total_cost > 7.50){
        coffee_recept += `${coffee_amount.value} Coffees: $${coffee_total_cost}`
    }
    else if(coffee_total_cost > 1){
        coffee_recept += `${coffee_amount.value} Coffee: $${coffee_total_cost}`
    }
    if(bagel_total_cost > 3.50){
        bagel_recept += `${bagel_amount.value} Bagels: $${bagel_total_cost}`
    }
    else if(bagel_total_cost > 1){
        bagel_recept += `${bagel_amount.value} Bagel: $${bagel_total_cost}`
    }
    if(banana_total_cost > 2){
        banana_recept += `${banana_amount.value} Bananas: $${banana_total_cost}`
    }
    else if(banana_total_cost > 1){
        banana_recept += `${banana_amount.value} Banana: $${banana_total_cost}`
    }
    order_prep.innerHTML = `${customer.value}, We Are Preparing Your Order`
    coffee_details.innerHTML = coffee_recept
    bagel_details.innerHTML = bagel_recept
    banana_details.innerHTML = banana_recept
    popUp.innerHTML += `${cost}`
    bagel_amount.value = ''
    banana_amount.value = ''
    coffee_amount.value = ''
    console.log(coffee_amount.name)
    
    setTimeout(ready,5000)    
    })





