const express = require('express')
const router = express.Router()
const {getProducts} = require('../controllers/productsControllers')
// const {protect} = require('../middleware/authMiddleware')

router.get('/', getProducts)

module.exports = router
