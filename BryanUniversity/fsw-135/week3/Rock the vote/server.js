const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/rock-the-vote');
    console.log("Connected to the DB")
}


app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({ secret: process.env.SECRET,  algorithms: ['HS256'] })) // req.user
app.use('/api/issue', require('./routes/issuesRouter.js'))
app.use('/api/comments', require('./routes/commentRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })
  
  app.listen(9000, () => {
    console.log(`Server is running on local port 9000`)
  })