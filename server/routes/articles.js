var express = require('express');
var router = express.Router();
const articleController = require('../controllers/article')

router.get('/', articleController.all)
router.post('/', articleController.create)
router.put('/:id', articleController.update)
// router.delete('/:id', articleController.remove)
// router.post('/category', articleController.searchCategory)
// router.post('/author', articleController.searchAuthor)

module.exports = router;