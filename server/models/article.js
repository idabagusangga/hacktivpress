const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ArticleSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: [{
    type: Schema.Types.ObjectId,
    ref: 'UserPress'
  }],
  category: {
    type: String,
    required: true
  }
})

const Article = mongoose.model('ArticlePress', ArticleSchema)

module.exports = Article;