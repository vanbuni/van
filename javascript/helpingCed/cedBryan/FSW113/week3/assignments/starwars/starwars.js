// declare any necessary variables
var queryType = document.getElementById('queryType')
var itemID = document.getElementById('itemID')
var dataLabel1 = document.getElementById('dataLabel1')
var dataValue1 = document.getElementById('dataValue1')
var dataLabel2 = document.getElementById('dataLabel2')
var dataValue2 = document.getElementById('dataValue2')
var ResponseData = document.getElementById('ResponseData')

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'
function fetchData(){
    var id = itemID.value
    var query = queryType.value
    if(query === 'starships' && id == 1){
        id = 2
    }
    console.log(id)
    getFromSWAPI(query,id)
}
function getFromSWAPI(queryType,itemID) {
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data,queryType)
    })
    .catch(function(err) {
        console.warn(err)
    })
}

// fetchButton.addEventListener('click',()=>{

//     fetchData(queryType,itemID)
// })

function updateInfo(data, queryType){
    if(queryType === 'people'){
        dataLabel1.innerHTML = 'Person Name:'
        dataValue1.innerHTML = data.name
        dataLabel2.innerHTML = 'Hair Color:'
        dataValue2.innerHTML = data.hair_color
    }
    if(queryType === 'planets'){
        dataLabel1.innerHTML = 'Planet Name:'
        dataValue1.innerHTML = data.name
        dataLabel2.innerHTML = 'Planet Climate:'
        dataValue2.innerHTML = data.climate
    }
    if(queryType === 'starships'){
        dataLabel1.innerHTML = 'Ship Name:'
        dataValue1.innerHTML = data.name
        dataLabel2.innerHTML = 'Ship Crew:'
        dataValue2.innerHTML = data.crew
    }

}
// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.