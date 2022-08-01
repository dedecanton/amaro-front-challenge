import { CartItem } from "../types/index.types"

const findCartItem = (id:string,size:string,cartListItem:CartItem[]) => {
    return cartListItem.find(item => item.id === id && item.size === size)
}

export default findCartItem