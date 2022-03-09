// Server.js


const express = require('express')
const app = express();
const morgan = require('morgan')
const { v4: uuidv4 } = require('uuid')
const bookRouter = require('../routes/bookRouter')
const tvShowRouter = require('../routes/tvShowRouter')
const PORT = 9000;

//Application Level Middleware
app.use(express.json())
app.use(morgan('dev'));


//Routes
app.use('/books', bookRouter)
app.use('/tv-shows', tvShowRouter)

//GET all route

// error handling
app.use((err, req, res, next) =>{
  console.log(err);
  return res.send({errMsg: err.message})
})



// server start logic

app.listen(PORT, () => {
  console.log(`App started listening on port: ${PORT}`)
})