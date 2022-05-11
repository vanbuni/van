const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require("cors")
let date = new Date();
let dd = date.getDate();


let mm = date.getMonth() + 1;
let yyyy = date.getFullYear()
//nodemon index.js to run server
//Create connection string

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Football1!',
  //Establish connection to newly created DB
  database: 'workoutTracker'
});


//Establish a connection

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Database Connection Established Successfully!");
})


app.use(express.json())
app.use(cors());



app.post('/createUsers',(req,res)=>{
    const name = req.body.name
    const username = req.body.username
    const user_creation = `${yyyy}-${mm}-${dd}`
    


    db.query('INSERT INTO users (name, user_creation, username) VALUES (?,?,?)',
    [name,user_creation, username],
    (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.send("VALUES inserted")
        }
   
   }
    )
})




 app.post('/createWorkout',(req,res)=>{
    const body_group = req.body.body_group
    const intensity = req.body.intensity
    const username = req.body.username
    
    const workout_date = `${yyyy}-${mm}-${dd}`;
    

    db.query('INSERT INTO workouts (body_group, intensity, username, workout_date) VALUES (?,?,?,?)',
    [body_group, intensity, username,workout_date],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("VALUES inserted")
        }
    }
    )


 })
 



 app.post('/createMeasurements',(req,res)=>{
    const weight = req.body.weight
    const thigh = req.body.thigh
    const waist = req.body.waist
    const back = req.body.back
    const chest = req.body.chest
    const arm = req.body.arm
    const neck = req.body.neck
    const username = req.body.username
    const measurements_date = `${yyyy}-${mm}-${dd}`




    db.query('INSERT INTO measurements (weight, thigh, waist, back, chest, arm, neck, username, measurements_date) VALUES (?,?,?,?,?,?,?,?,?)',
    [weight, thigh, waist, back, chest, arm, neck, username, measurements_date],
    (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.send("VALUES inserted")
        }
   
   }
    )
})



app.get('/users', (req,res)=>{
    db.query('SELECT * FROM users', (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
})
app.get('/workouts', (req,res)=>{
    db.query('SELECT * FROM workouts', (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
})
app.get('/userWorkouts/:username', (req,res)=>{
    const username = req.params.username
    db.query('SELECT * FROM workouts WHERE username = ?', username, (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
})
app.get('/getMeasurements/:username', (req,res)=>{
    const username = req.params.username
    db.query('SELECT * FROM measurements WHERE username = ?', username, (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
})
app.delete('/deleteWorkout/:workout_id', (req,res)=>{
    const workout_id = req.params.workout_id
    db.query('DELETE FROM workouts WHERE workout_id = ?', workout_id, (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("DELETED")
        }
    })
})







app.listen(3001, () => {
  console.log("Server running on PORT 3001");
})

