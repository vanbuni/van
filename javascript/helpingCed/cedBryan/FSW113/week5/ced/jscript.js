let new_student

var reset = document.querySelector('#reset').addEventListener("click",() => {
    var puts = [...document.querySelectorAll('input')]
    puts.forEach(input => input.value = '')
})

var print = document.querySelector('#print').addEventListener("click",() => {
    newStudent()
    display()
})
//If you have a more effective was to turn a single input value into an array, I'd love to hear 
function newStudent() {
    new_student = new Student(
        studentName.value,
        className.value,
        makeArr(studentScores.value),
        makeArr(possibleScores.value)
    )
    return new_student
}

function display() {
    certStudentName.innerText = studentName.value
    certClassName.innerText = className.value
    certGrade.innerText = new_student.calcStudentGrade()
}
function makeArr(arr) {
    a = arr.split(" ").map((item) => {
        return item
    })
    console.log(a)
    return a
}