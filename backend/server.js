const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const {errorHandler} = require ('./middleware/errorMiddleware')
const cors = require( 'cors' )  //imported from the npm package called "cors"
const port = process.env.PORT || 5000

connectDB()

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(errorHandler)


app.listen(port, () => console.log(`Servidor inicializado en el puerto ${port}!`))
app.get('/', (req, res) => res.send('Hola mundo, vamos a desarrollar Mixcum!'))
