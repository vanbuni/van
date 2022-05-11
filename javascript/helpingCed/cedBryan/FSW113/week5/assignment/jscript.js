// Declare any necessary variables.
var studentName = document.querySelector('#studentName')
var className = document.querySelector('#className')
var studentScores = document.querySelector('#studentScores')
var possibleScores = document.querySelector('#possibleScores')
var printBtn = document.querySelector('#print')
var reset = document.querySelector('#reset')
var certStudentName = document.querySelector('#certStudentName')
var certClassName = document.querySelector('#certClassName')
var certGrade = document.querySelector('#certGrade')
let new_student
// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
printBtn.addEventListener('click',()=>{
    newStudent()
    display()
})

// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
reset.addEventListener('click',()=>{
    console.log('click')
    studentName.value = ''
    className.value = ''
    studentScores.value = ''
    possibleScores.value = ''
    certStudentName.innerText = ''
    certClassName.innerText = ''
    certGrade.innerText = ''
})
// Create a function that instantiates a new student object with the input from the HTML form.
function newStudent(){
         new_student = new student(
        studentName.value,
        className.value,
        makeArray(studentScores.value),
        makeArray(possibleScores.value)
    )
    return new_student
}
// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function display(){
    certStudentName.innerText = studentName.value
    certClassName.innerText = className.value
    certGrade.innerText = new_student.score()

}
// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
function makeArray(scores){
    arry = scores.split(" ")
    return arry.map((item)=>{
        return Number(item)
    })
}