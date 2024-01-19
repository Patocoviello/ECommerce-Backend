import ModelMongoDB from "./productosMongoDB.js"
import ModelMem from "./productosMem.js"

class ModelFactory {
    static get(tipo) {
        switch (tipo) {
            case 'MONGODB':
                console.log('Productos ===> Alojados en MongoDB')
                return new ModelMongoDB()

            default:
                console.warn('Productos ===> Persistiendo en Memoria (default)')
                return new ModelMem()
        }
    }
}

export default ModelFactory