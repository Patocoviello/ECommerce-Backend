import ModelMongoDB from "../carrito/carritoMongoDB.js"
import ModelMem from "../carrito/carritoMem.js"

class ModelFactory {
    static get(tipo) {
        switch (tipo) {
            case 'MONGODB':
                console.log('Carrito ===> Alojado en MongoDB')
                return new ModelMongoDB()

            default:
                console.log('Carrito ==> Alojado en memoria (default)')
                return new ModelMem()
        }
    }
}

export default ModelFactory