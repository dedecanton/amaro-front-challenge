import React from 'react'
import './CartIcon.scss'
import { BsBag } from "react-icons/bs";
import { useAppSelector } from '../../../../store/hooks';

type CartIconProps = {
    onClick: () => void
}

const CartIcon = ({onClick}:CartIconProps) => {
  
  const totalItems = useAppSelector(state => state.cartListItem).reduce((acc, item) => {
    return acc + item.quantity
  }, 0)


  return (
    <div className='cart-icon__container' onClick={onClick}>
        <BsBag />
        <span className='cart-icon__quantity'>{totalItems}</span>
    </div>
  )
}

export default CartIcon