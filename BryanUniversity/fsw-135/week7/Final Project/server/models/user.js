const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const userSchema = new Schema({
  
  //Storing username
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  //Storing password
  password: {
    type: String,
    required: true
  },
  //Storing the users join date 
  memberSince: {
    type: Date,
    default: Date.now
  },
  //Storing users issues
  issues: {
    type: Array,
    default: []
  },
  //Taking admin power from users
  isAdmin: {
    type: Boolean,
    default: false
  }
})

userSchema.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) return next()
  bcrypt.hash(user.password, 8, (err, hash) => {
    if (err) return next(err)
    user.password = hash
    next()
  })
})

userSchema.methods.checkPassword = function (passwordAttempt, callback) {
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
    if (err) return callback(err)
    return callback(null, isMatch)
  })
}
userSchema.methods.withoutPassword = function () {
  const user = this.toObject()
  delete user.password
  return user
}

module.exports = mongoose.model("User", userSchema)