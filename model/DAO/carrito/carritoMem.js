class ModelMem {
    constructor() {
        this.carrito = []
    }

    getCarrito = async () => this.carrito

    saveCarrito = async carrito => {
        try {
            carrito.id = String(parseInt(this.carrito[this.carrito.length - 1]?.id || 0) + 1)
            this.carrito.push(carrito)
            return carrito
        }
        catch (error) {
            throw new Error(error.message)
        }
    }
}

export default ModelMem