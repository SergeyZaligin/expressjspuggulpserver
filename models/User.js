const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  nickname: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'register'
  }
})

module.exports = mongoose.model('User', UserSchema)