const asyncHandler = require('express-async-handler')
const Product = require('../models/productsModel')

const getProducts = asyncHandler(async (req, res) => {

    const products = await Product.find({ user: req.user.id })
    res.status(200).json(products)
})




module.exports = {
    getProducts
}