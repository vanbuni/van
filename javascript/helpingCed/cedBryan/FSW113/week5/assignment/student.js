// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
class student {
    constructor(...args){
        this.studentName = args[0],
        this.className = args[1],
        this.studentScores = args[2],
        this.possibleScores = args[3]
    }

    student_Scores(){
        let studentTotalScore = this.studentScores.reduce((currentScore, score)=>{
            
            return currentScore + score
        },
    0)
    return studentTotalScore
    }

    possibleScoresTotal(){
        let possibleScoreTotal = this.possibleScores.reduce((currentTotal, score)=>{
            
            return currentTotal + score
        },
    0)
    return possibleScoreTotal
    }

    score(){
       var submissions =  this.studentScores.reduce((curVal, val)=>{
        return curVal + val
        },0)
        var master = this.possibleScores.reduce((curVal, val)=>{
            return curVal + val
            },0)
        var final_grade =  submissions / master
        console.log(final_grade)
        if(Number(final_grade) >= Number(0.9)){
            return 'A'
        }
        if(Number(final_grade) < Number(0.9) && Number(final_grade) >= Number(0.8)){
            return 'B'
        }
        if(Number(final_grade) < Number(0.8) && Number(final_grade) >= Number(0.7)){
            return 'C'
        }
        if(Number(final_grade) < Number(0.7) && Number(final_grade) >= Number(0.6)){
            return 'D'
        }
        else{
            return 'F'
        }
    }
}





// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)