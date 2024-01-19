import Servicio from '../servicio/productos.js'

class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    getProductos = async (req,res) => {
        const {id} = req.params
        const productos = await this.servicio.getProductos(id)
        res.json(productos)
    }

    saveProducto = async (req,res) => {
        try {
            const producto = req.body
            const productoSaved = await this.servicio.saveProducto(producto)
            res.json(productoSaved)
        }
        catch(error) {
            res.json({ errMsg: error.message })
        }
    }

    updateProducto = async (req,res) => {
        const { id } = req.params
        const producto = req.body
        const productoUpdated = await this.servicio.updateProducto(id,producto)
        res.json(productoUpdated)
    }

    deleteProducto = async (req,res) => {
        const { id } = req.params
        const productoDeleted = await this.servicio.deleteProducto(id)
        res.json(productoDeleted)
    }
}


export default Controlador