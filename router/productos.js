import express from 'express'
import Controlador from '../controlador/productos.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.get('/:id?', this.controlador.getProductos)
        this.router.post('/', this.controlador.saveProducto)
        this.router.put('/:id', this.controlador.updateProducto)
        this.router.delete('/:id', this.controlador.deleteProducto)
        return this.router
    }
}


export default Router