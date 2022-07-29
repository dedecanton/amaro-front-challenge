import React, { ChangeEvent, useState } from "react";
import { Product } from "../../../types/index.types";
import "./ProductCard.scss";

import ImageNotFound from "../../../assets/image-not-found.png";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { cartActions } from "../../../store/cartSlice";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    image,
    name,
    discount_percentage,
    on_sale,
    sizes,
    actual_price,
    regular_price,
    code_color,
  } = product;

  const availableSizes = sizes.filter((size) => size.available);
  const [size, setSize] = useState<string>();
  const [error, setError] = useState<string | null>(null);
  const productImage = image.length > 0 ? image : ImageNotFound;
  const dispatch = useAppDispatch();

  // handlers
  const handleChangeSize = (e: ChangeEvent<HTMLInputElement>) => {
    const size = e.target.value;
    setSize(size);
  };
  const handleAddToCart = () => {
    if (!size) {
      setError("Selecione um tamanho!");
      return;
    }

    setError(null);
    dispatch(
      cartActions.addItemToCart({
        product,
        size: size!,
      })
    );
  };

  return (
    <div className="product-card__container">
      {discount_percentage && (
        <span className="product-card__discount">-{discount_percentage}</span>
      )}

      {on_sale && <span className="product-card__sale">On sale</span>}
      <div
        className="product-card__image"
        style={{ backgroundImage: `url(${productImage})` }}
      />
      <div className="product-card__content">
        <h1 className="product-card__name">{name}</h1>
        <div className="product-card__sizes">
          {availableSizes.map((size) => (
            <div key={size.sku}>
              <input
                id={size.sku}
                type="radio"
                name={code_color}
                value={size.size}
                onChange={handleChangeSize}
              />
              <label htmlFor={size.sku}>{size.size}</label>
            </div>
          ))}
        </div>
        <div className="product-card__price">
          <p>{actual_price} </p>
          {discount_percentage && <span>{regular_price}</span>}
        </div>

        {on_sale && (
          <button onClick={handleAddToCart}>+ Adiconar ao carrinho</button>
        )}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
