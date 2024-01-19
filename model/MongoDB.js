import { MongoClient } from "mongodb"
import config from '../config.js'

class CnxMongoDB {
    static client = null
    static db = null
    static connection = false

    static conectar = async () => {
        try {
            CnxMongoDB.client = new MongoClient(config.STRCNX)
            await CnxMongoDB.client.connect()
            CnxMongoDB.db = CnxMongoDB.client.db(config.BASE)
            CnxMongoDB.connection = true
            console.log('* Conexión exitosa a la base de datos * ')
        }
        catch(error) {
            console.log(`Error en conexión de base de datos: ${error.message}`)
        }
    }
}

export default CnxMongoDB