import express from 'express'
import config from './config.js'
import CnxMongoDB from './model/MongoDB.js'
import RouterProductos from './router/productos.js'
import RouterCarrito from './router/carrito.js'
import cors from 'cors'
const app = express()
app.use(cors({
    origin: '*',
}))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//-endpoints-
app.use('/api/productos', new RouterProductos().start())
app.use('/api/carrito', new RouterCarrito().start())

//-listeners-
if(config.PERSISTENCIA == 'MONGODB') {
    await CnxMongoDB.conectar()
}
const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`ECommerce Api ===> http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
