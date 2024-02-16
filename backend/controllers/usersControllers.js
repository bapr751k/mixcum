const jwt =require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler  = require('express-async-handler');
const User = require('../models/usersModel');

const crearUser = asyncHandler(async (req, res) => {
    const {name, email, password, phone} = req.body
    
    if (!name || !email || !password || !phone) {
        res.status(400)
        throw new Error('Faltan datos')
    }
    const userExiste = await User.findOne({ email })
    if (userExiste) {
        res.status(400)
        throw new Error('El usuario ya existe en la base de datos')
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    const  user = await User.create ({
            name,
            email,
            password: hashedPassword,
            phone
        })
    
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone
        })
        } else {
            res.status(400)
            throw new Error('Error al crear el usuario, no se pudo gardar los datos')
        }


})

const  loginUser = asyncHandler(async (req, res) => {

    const  { email, password } = req.body;
    const user = await  User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generarToken(user.id),
                phone: user.phone
        })
    } else {
        res.status(400)
        throw new Error("Email o contraseña incorrectos")
    }
})

const datosUser = asyncHandler(async (req,res) =>{
    res.status(200).json(req.user)
})

const generarToken = (id_usuario) => {
    return jwt.sign({ id_usuario}, process.env.JWT_SECRET,{
            expiresIn:  '30d'
    })
}

module.exports = {
    crearUser,
    loginUser,
    datosUser
}
