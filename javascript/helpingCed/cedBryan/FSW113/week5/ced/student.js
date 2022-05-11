class Student {
    constructor(...args) {
        this.studentName = args[0],
        this.className = args[1],
        this.studentScores = args[2],
        this.possibleScores = args[3]
    }

    addStudentScores() {
        let studentTotalScore = this.studentScores.reduce((currentScore,score) => {
            return currentScore + score
        },0)
        return studentTotalScore
    }
        
    addPossibleScores() {
        let possibleTotalScores = this.possibleScores.reduce((currentScore,score) => {
            return currentScore + score
        },0)
        return possibleTotalScores
    }

    calcStudentGrade(){
        var gradeSum = this.addStudentScores() / this.addPossibleScores()
        console.log(gradeSum)
        if (gradeSum >= Number(0.9)){
            return "A"
        }
        if (gradeSum < Number(0.9) && gradeSum >= Number(0.8)){
            return "B"
        }
        if (gradeSum < Number(0.7) && gradeSum >= Number(0.6)){
            return "C"
        }
        if (gradeSum < Number(0.5) && gradeSum >= Number(0.4)){
            return "D"
        }else {
            return "F"
        }
        
    }
}
