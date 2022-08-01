import React from "react";
import { CartItem as CartItemType } from "../../../types/index.types";
import ImageNotFound from "../../../assets/image-not-found.png";
import "./CartItem.scss";
import { useAppDispatch } from "../../../store/hooks";
import { cartActions } from "../../../store/cartSlice";
import { AiOutlineDelete } from "react-icons/ai";

type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, id, image, price, quantity, size, totalPrice } = cartItem;
  const cartItemImage = image.length > 0 ? image : ImageNotFound;
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(cartActions.incrementItem({ id, size }));
  };
  const handleDecrement = () => {
    dispatch(cartActions.decrementItem({ id, size }));
  };
  const handleDelete = () => {
    dispatch(cartActions.deleteItem({ id, size }));
  };

  return (
    <li className="cart-item__container">
      <div className="cart-item__info-container">
        
        <div
          className="cart-item__image"
          style={{ backgroundImage: `url(${cartItemImage})` }}
        />
        <div className="cart-item__info">
          <h2>{name}</h2>
          <p>Size: {size}</p>
        </div>
      </div>

      <div className="cart-item__resume">
        <div className="cart-item__quantity">
          <button onClick={handleDecrement}>-</button>
          <p>{quantity}</p>
          <button onClick={handleIncrement}>+</button>
        </div>

        <p className="cart-item__price">x{price.toFixed(2)}</p>

        <p className="cart-item__total-price">{totalPrice.toFixed(2)}</p>

        <AiOutlineDelete onClick={handleDelete} className="cart-item__delete"/>
      </div>
    </li>
  );
};

export default CartItem;
