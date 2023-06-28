const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

// newsController.index
//tránh trường hợp nó nhận / trước /:slug
router.use('/search', siteController.search)
router.use('/', siteController.index)

module.exports = router;
