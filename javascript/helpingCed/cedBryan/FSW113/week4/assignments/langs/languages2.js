const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.



function chkLang(langs) {
    let obj = document.querySelector('#TestResult')
    if (langs.some(item => item == lang)) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}
submit.addEventListener('click',()=>{
    let knownLangs = [... document.querySelectorAll('input')].map(input => input.value) 
    
    chkLang(knownLangs)
})