import { Product } from "../types/index.types"

const createNewCartItem = (product:Product, size:string) => {
    const price = parseFloat(product.actual_price.split(' ')[1].replace(',','.'))

    return {
        image: product.image,
        name: product.name,
        id: product.code_color + size,
        price,
        quantity: 1,
        size,
        totalPrice: price,
    }
}

export default createNewCartItem


