import React, { ChangeEvent, useEffect, useState } from "react";
import { Product } from "../../types/index.types";
import "./Catalog.scss";
import ProductCard from "./ProductCard";
import ProductData from "./products.json";

const productsList = ProductData.products;

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>(ProductData.products);
  const [filterText, setFilterText] = useState<string>("");
  const [onSaleFilter, setOnSaleFilter] = useState<boolean>(false);

  useEffect(() => {
    const filteredByText = productsList.filter((product) =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    );

    if (onSaleFilter) {
      const newProducts = filteredByText.filter((item) => item.on_sale);
      setProducts(newProducts);
      return;
    }

    setProducts(filteredByText);
  }, [onSaleFilter, filterText]);

  const handleChangeFilterText = (e: ChangeEvent<HTMLInputElement>) =>
    setFilterText(e.target.value);
  const handleSetOnSaleFilter = (e: ChangeEvent<HTMLInputElement>) =>
    setOnSaleFilter(e.target.checked);

  return (
    <div className="catalog__container">
      <div className="catalog__actions">
        <input
          className="catalog__filter-text"
          type="text"
          placeholder="Pesquisar produto"
          onChange={handleChangeFilterText}
        />
        <div className="catalog__filter-onsale">
          <input
            type="checkbox"
            onChange={handleSetOnSaleFilter}
            id="onsale-filter"
          />
          <label htmlFor="onsale-filter">Mostrar apenas produtos à venda</label>
        </div>
      </div>
      <div className="catalog__list">
        {products.length ? (
          products.map((product) => (
            <ProductCard key={product.code_color} product={product} />
          ))
        ) : (
          <p className="catalog__message">Nenhum produto encontrado!</p>
        )}
      </div>
    </div>
  );
};

export default Catalog;
