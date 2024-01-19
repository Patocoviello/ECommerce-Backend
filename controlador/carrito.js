import Servicio from '../servicio/carrito.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    getCarrito = async (req,res) => {
        const carrito = await this.servicio.getCarrito()
        res.json(carrito)
    }

    saveCarrito = async (req,res) => {
        try {
            const carrito = req.body
            const carritoGuardado = await this.servicio.saveCarrito(carrito)
            res.json(carritoGuardado)
        }
        catch(error) {
            res.json({ errMsg: error.message })
        }
    }
}
export default Controlador