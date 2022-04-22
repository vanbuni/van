const lang = 'JavaScript'
var lang0 = document.querySelector('#lang0')
var lang1 = document.querySelector('#lang1')
var lang2 = document.querySelector('#lang2')
var lang3 = document.querySelector('#lang3')
var lang4 = document.querySelector('#lang4')
var lang5 = document.querySelector('#lang5')
var lang6 = document.querySelector('#lang6')
var lang7 = document.querySelector('#lang7')
var submit = document.querySelector('#submit')
// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.



function chkLang(langs) {
    let result = false
    console.log(langs)
    langs.forEach((lang)=>{
        if(lang === 'JavaScript' || lang === 'Javascript' ||lang === 'javascript'){
            result = true
        }
    })

    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}
submit.addEventListener('click',()=>{
    var spread_arr = []
    var langs = [lang0.value, lang1.value, lang2.value, lang3.value, lang4.value, lang5.value, lang6.value, lang7.value, ...spread_arr]
    chkLang(langs)
})