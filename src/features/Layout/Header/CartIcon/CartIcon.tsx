import React from 'react'
import './CartIcon.scss'
import { BsBag } from "react-icons/bs";

type CartIconProps = {
    onClick: () => void
}

const CartIcon = ({onClick}:CartIconProps) => {
  return (
    <div className='cart-icon__container' onClick={onClick}>
        <BsBag />
        <span className='cart-icon__quantity'>0</span>
    </div>
  )
}

export default CartIcon