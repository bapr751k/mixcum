const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderNumber: {
        type: String,
        unique: false,
    },
    codproduct: {
        type: Number,  //Codigo de producto del cliente
        default: null
    },
    producQuantity: {
        type: Number,   //Cantidad de unidades que se compraron
        required: [true, "La cantidad es obligatoria"]
    }, 
    price: {
        type: Number,     //Precio del producto
        required: [true, "El precio es obligatorio"],
    },
    sale:{
        type : Number,
        sale: this.producQuantity * this.price
        }

})

module.exports = mongoose.model("Order",orderSchema)
