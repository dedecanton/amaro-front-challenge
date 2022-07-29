import React, { useState } from 'react'
import { Product } from '../../types/index.types'
import './Catalog.scss'
import ProductCard from './ProductCard'
import ProductData from './products.json'

const Catalog = () => {

  const [products, setProducts] = useState<Product[]>(ProductData.products)

  return (
    <div className='catalog__container'>
      {products.map((product) => (
        <ProductCard key={product.code_color} product={product}/>
      ))}
    </div>
  )
}

export default Catalog