var sel_mon = document.getElementById('select_month')
var go = document.getElementById('go')
var year = document.getElementById('year')
var month_display = document.getElementById('month_display')
var year_display = document.getElementById('year_display')

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let today = new Date('01/01/2020')
console.log(today)
for(let x = 0; x < month.length; x++){
    var opt = document.createElement('option')
    opt.value = month[x]
    opt.innerHTML = month[x]
    sel_mon.appendChild(opt)
    }







go.addEventListener('click',()=>{
    today = new Date(`${sel_mon.value}/1/${year.value}`)
    printCalender()

})
    
    


function printCalender(){

    document.getElementById('calendarDays').innerHTML = ''
    
    month_display.innerHTML = sel_mon.value
    year_display.innerHTML = year.value
    let days

    switch (sel_mon.value) {
    case 'February':
        days = 28
        break
    case 'April':
        days = 29
        break
    case 'November':
    case 'June':
        days = 30
        break
    default:
        days = 31
}



    
let x
const weekday = today.getDay()

for (x = 0; x < weekday; x++){
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
}

let dt = 0
do {
    dt++
    document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
} while ( dt < days)


const remainder = (7 - ((x + dt) % 7))
let y = 0
while ( y < remainder) {
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    y++
}


}
printCalender()