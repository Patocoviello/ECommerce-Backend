import ModelFactory from '../model/DAO/carrito/carritoFactory.js'
import config from '../config.js'

class Servicio {
    constructor() {
        this.model = ModelFactory.get(config.PERSISTENCIA)
    }

    getCarrito = async _ => {
        try {
            const carrito = await this.model.getCarrito()
            return carrito
        }
        catch (error) {
            throw new Error(error.message)
        }
    }

    saveCarrito = async carrito => {
        try {
            const carritoGuardado = await this.model.saveCarrito(carrito)
            return carritoGuardado
        }
        catch (error) {
            throw new Error(error.message)
        }
    }
}

export default Servicio

