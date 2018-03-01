const UserModel = require('../models/user')
const jwt = require('jsonwebtoken')

class UserController {
  static all (req, res) {
    UserModel.find()
    .then(response => {
      res.status(200).json({
        msg: 'list of all users',
        data: response
      })
    })
    .catch(err => {
      res.status(500).json({
        msg:'failed to get list of all users',
        err: err
      })
    })
  }
  static register (req, res) {
    let newUser = new UserModel ({
      username: req.body.username,
      password: req.body.password
    })
    newUser.save()
    .then(response => {
      res.status(200).json({
        msg: 'user created. Please log in'
      })
    })
    .catch(err => {
      res.status(500).json({
        msg: 'user registration failed. Please provide all the required fields',
        err: err
      })
    })
  }
  static login (req, res) {
    UserModel.find({
      username: req.body.username
    })
    .then(response => {
      let payload = {
        username: response[0].username
      }
      let token = jwt.sign(payload, process.env.SECRET)
      res.status(200).json({
        msg: 'login sucessful',
        token: token
      })
    })
    .catch()
  }
}


module.exports = UserController;