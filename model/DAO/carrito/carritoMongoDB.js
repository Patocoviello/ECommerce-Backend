import CnxMongoDB from "../../MongoDB.js"

class ModelMongoDB {

    getCarrito = async () => {
        try {
            if (!CnxMongoDB.connection) {
                return []
            }
            const carrito = await CnxMongoDB.db.collection('carrito').find({}).toArray()
            return carrito
        }
        catch (error) {
            throw new Error(error.message)
        }
    }


    saveCarrito = async carrito => {
        try {
            if (!CnxMongoDB.connection) {
                return {}
            }
            await CnxMongoDB.db.collection('carrito').insertOne(carrito)
            console.warn('Se ha generado un nuevo carrito', carrito)
            return carrito
        }
        catch (error) {
            throw new Error(error.message)
        }
    }
}

export default ModelMongoDB