// import the convertTemp.js and getDaylight.js scripts with their default export
// import convertTemp from './convertTemp'
// import getDayight from './getDayight'
// declare any variables needed

var goBttn = document.querySelector('#goBttn')


// create an event listener for the click of the goBttn that calls a function to fetch the weather data
goBttn.addEventListener('click',()=>{
    catchData()
})

// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        
function catchData(){
    getData()
    .then(res => {
        console.log(res.data);
        temp(res.data)
    })
    .catch(err => console.log(err))
}
// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data

async function getData(){
    var city = document.querySelector('#city')
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=fbede32f8faff43db014f59edd89b4a2`)
    return res
}

// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city

function temp(data){
    var tempData = document.querySelector('#tempData').innerText = data.main.temp
    var humidData = document.querySelector('#humidData').innerText = data.main.humidity
    var conditionsData = document.querySelector('#conditionsData').innerText = data.cod
}