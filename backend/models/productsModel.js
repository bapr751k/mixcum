const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    description: {
        type: String, 
        required: [true, 'Por favor  ingrese una descripción']
    },
    codproduct: {
        type: Number, 
        unique: true
    },
    price: {
        type: Number, 
        required: [true,'Por favor ingrese un precio'],
        validate(value) {
            if (this.price <= 0 ) {
                throw new Error("El precio no puede ser negativo o cero")
            }
        }
    },
    inventory: {
        type: Number, 
        required: [true,"Ingrese la cantidad de existencias"],
        validate(value){
            if (this.inventory < 0 ){
                throw new Error ("No se pueden registrar valores negativos")
            } else if (isNaN(Number(value))){
                throw new Error ('Solo se permiten numeros')
            }
        } 
    },
    supplier:{
        type: String,
        required:[true, "ingrese el nombre del proveedor"]
    }
})

module.exports = mongoose.model('Product', userSchema);
