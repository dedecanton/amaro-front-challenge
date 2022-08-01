import React from "react";
import { useAppSelector } from "../../store/hooks";
import "./Cart.scss";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cartListItem);
  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.totalPrice
  },0 ).toFixed(2)

  return (
    <div className="cart__container">
      <h2 className="cart__title">Cart list</h2>
      {cartItems.length ? (
        <>
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </ul>
          <p className="cart__total-amount">Total: R$ {total}</p>
        </>
      ) : (
        <p className="cart__message">Carrinho vazio!</p>
      )}
    </div>
  );
};

export default Cart;
