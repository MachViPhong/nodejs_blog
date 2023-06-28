const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewsController')

// newsController.index
//tránh trường hợp nó nhận / trước /:slug
router.use('/:slug', newsController.show)
router.use('/', newsController.index)

module.exports = router;
