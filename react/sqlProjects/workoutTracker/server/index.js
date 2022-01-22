const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require("cors")

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



    db.query('INSERT INTO users (name) VALUES (?)',
    [name],
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
    const users_id = req.body.users_id


    db.query('INSERT INTO workouts (body_group, intensity, users_id) VALUES (?,?,?)',
    [body_group, intensity, users_id],
    (err,result)=>{
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
app.get('/workouts/:users_id', (req,res)=>{
    const users_id = req.params.users_id
    db.query('SELECT * FROM workouts WHERE users_id = ?', users_id, (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
})
app.delete('/workouts/:users_id', (req,res)=>{
    const users_id = req.params.users_id
    db.query('DELETE FROM workouts WHERE users_id = ?', users_id, (err,result)=>{
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