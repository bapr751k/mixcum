const express = require('express')
const {errorHandler} = require ('./middleware/errorMiddleware')


const port = process.env.PORT || 8000
const app = express()

app.use(errorHandler)

app.listen(port, () => console.log(`Servidor inicializado en el puerto ${port}!`))
app.get('/', (req, res) => res.send('Hola mundo, vamos a desarrollar Mixcum!'))
