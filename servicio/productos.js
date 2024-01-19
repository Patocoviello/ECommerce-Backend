import ModelFactory from '../model/DAO/productos/productosFactory.js'
import config from '../config.js'

class Servicio {
    constructor() {
        this.model = ModelFactory.get(config.PERSISTENCIA)
    }

    getProductos = async id => {
        try{
            if (id) {
                const producto = await this.model.obtenerProducto(id)
                return producto
            }
            else {
                const productos = await this.model.getProductos()
                return productos
            }
        }
        catch(error){
            throw new Error(error.message)
        }
    }

    saveProducto = async producto => {
        try {
            const productoSaved = await this.model.saveProducto(producto)
            return productoSaved
        }
        catch (error) {
            throw new Error(error.message)
        }
    }

    updateProducto = async (id, producto) => {
        try {
            const productoUpdated = await this.model.updateProducto(id, producto)
            return productoUpdated
        }
        catch (error) {
            throw new Error(error.message)
        }
    }

    deleteProducto = async id => {
        try {
            const productoDeleted = await this.model.deleteProducto(id)
            return productoDeleted
        }
        catch (error) {
            throw new Error(error.message)
        }
    }
}

export default Servicio

