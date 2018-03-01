const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

let UserSchema = new Schema ({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

UserSchema.pre('save',function(callback){
    let plainPassword = this.password
    bcrypt.hash(plainPassword,10)
    .then(hash=>{
        this.password = hash
        callback()
    })
    .catch(callback)
})

const User = mongoose.model('UserPress', UserSchema)

module.exports = User;