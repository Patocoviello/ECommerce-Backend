import { ObjectId } from "mongodb"
import CnxMongoDB from "../../MongoDB.js"

class ModelMongoDB {

    getProductos = async () => {
        try {
            if (!CnxMongoDB.connection) {
                return []
            }
            const productos = await CnxMongoDB.db.collection('productos').find({}).toArray()
            return productos
        }
        catch (error) {
            throw new Error(error.message)
        }
    }

    obtenerProducto = async id => {
        try {
            if (!CnxMongoDB.connection) {
                return {}
            }
            const producto = await CnxMongoDB.db.collection('productos').findOne({ _id: new ObjectId(id) })
            return producto
        }
        catch (error) {
            throw new Error(error.message)
        }
    }

    saveProducto = async producto => {
        try {
            if (!CnxMongoDB.connection) return {}
            await CnxMongoDB.db.collection('productos').insertOne(producto)
            return producto
        }
        catch (error) {
            throw new Error(error.message)
        }
    }

    updateProducto = async (id, producto) => {
        try {
            if (!CnxMongoDB.connection) {
                return {}
            }
            await CnxMongoDB.db.collection('productos').updateOne({ _id: new ObjectId(id) }, { $set: producto })

            const productoUpdated = await this.obtenerProducto(id)
            return productoUpdated
        }
        catch (error) {
            throw new Error(error.message)
        }
    }

    deleteProducto = async id => {
        try {
            if (!CnxMongoDB.connection) {
                return {}
            }
            const productoDeleted = await this.obtenerProducto(id)
            await CnxMongoDB.db.collection('productos').deleteOne({ _id: new ObjectId(id) })

            return productoDeleted
        }
        catch (error) {
            throw new Error(error.message)
        }
    }
}

export default ModelMongoDB