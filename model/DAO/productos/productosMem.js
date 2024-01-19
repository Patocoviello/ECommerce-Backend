class ModelMem {

    constructor() {
        this.productos = []
    }

    getProductos = async () => this.productos

    obtenerProducto = async id => this.productos.find(p => p.id == id) || {}

    saveProducto = async producto => {
        producto.id = String(parseInt(this.productos[this.productos.length-1]?.id || 0) + 1)
        if(producto.precio) producto.precio = Number(producto.precio)
        if(producto.stock) producto.stock = parseInt(producto.stock)
        this.productos.push(producto)
        return producto
    }

    updateProducto = async (id, producto) => {
        producto.id = id
        const index = this.productos.findIndex(p => p.id == id)

        if(index != -1) {
            const productoPrev = this.productos[index]
            
            const productoNew = { ...productoPrev, ...producto }
            this.productos.splice(index, 1, productoNew)
            return productoNew
        }
        else {
            return {}
        }    
    }

    deleteProducto = async id => {
        let producto = {}

        const index = this.productos.findIndex(p => p.id == id)
        if(index != -1) {
            producto = this.productos.splice(index, 1)[0]
        }
        return producto    
    }
}

export default ModelMem