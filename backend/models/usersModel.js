const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor teclea tu nombre:"]
    },
    email: {
        type: String,
        required: [true, "Por favor teclea tu email:"],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        minlength: 8,
        validate(value) {
            if (this.password !== value) {
                throw new Error("Las contraseñas no coinciden");
            }
        }
    },
    phone: {
        type: String,
        maxLength: 10
    },
    esAdmin:{
        type: Boolean,
        default: false
    }
}, {
    timestamps: true //Crea campos createdAt y updatedAt
})

module.exports = mongoose.model('User', userSchema);