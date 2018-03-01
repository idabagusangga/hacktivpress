const ArticleModel = require('../models/article')
const jwt = require('jsonwebtoken')

class ArticleController {
  static all (req, res) {
    ArticleModel.find().populate('author')
    .then(response => {
      res.status(200).json({
        msg: 'list of all articles',
        data: response
      })
    })
    .catch(err => {
      res.status(500).json({
        msg: 'could not get all articles',
        err: err
      })
    })
  }
  static create (req, res) {
    if(req.body.token) {
      let decoded = jwt.verify(req.body.token, process.env.SECRET)
      let newArticle = new ArticleModel ({
        title: req.body.title,
        description: req.body.description,
        author: decoded.id,
        category: req.body.category
      })
      // console.log(newArticle);
      newArticle.save()
      .then(response => {
        res.status(200).json({
          msg: 'article created',
          data: response
        })
      })
      .catch(err => {
        console.log(err);
      })
    }
    else {
      res.status(500).json({
        msg: 'no token provided'
      })
    }
  }
  static update (req, res) {
    if(req.body.token) {
      ArticleModel.find({
        _id: req.params.id
      })
      .then(response => {
        response[0].title = req.body.title || response[0].title
        response[0].description = req.body.description || response[0].description
        response[0].category = req.body.category || response[0].category
        response[0].author = response[0].author
        response[0].save()
        .then(result => {
          res.status(200).json({
            msg: 'article updated',
            data: result
          })
        })
        .catch(err => {
          console.log(err);
        })
      })
      .catch(err => {
        console.log(err);
      })
    }
    else{
      res.status(500).json({
        msg: 'please provide valid token'
      })
    }
  }
  static remove (req, res) {

      ArticleModel.remove({
        _id: req.params.id
      })
      .then(response => {
        res.status(200).json({
          msg: 'article deleted',
          data: response
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: 'unable to remove',
          err: err
        })
      })
    
  }
  static findOneArticle (req, res) {
      ArticleModel.find({
        _id:req.params.id
      }).populate('author')
      .then(response => {
        res.status(200).json({
          msg: 'got article',
          data: response
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  static searchCategory (req, res) {
    if(req.body.token) {
      ArticleModel.find({
        category:req.body.category
      }).populate('author')
      .then(response => {
        res.status(200).json({
          msg: 'got article',
          data: response
        })
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      res.status(500).json({
        msg: 'no token'
      })
    }
  }
  static searchAuthor (req, res) {
    if(req.body.token) {
      ArticleModel.find().populate('author')
      .then(response => {
        let result = response.filter(article => 
          article.author[0].username == req.body.username
        )
        res.status(200).json({
          msg: 'authors',
          data: result
        })
      })
      .catch(err => {
        console.log(err);
      })
    } else {
      res.status(500).json({
        msg: 'no token'
      })
    }
  }
}

module.exports = ArticleController;