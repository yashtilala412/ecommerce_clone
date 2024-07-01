import React from 'react';
import Product from './Product';
import products from '../data/products';
import './productlist.css'

function ProductList({ onAddToCart }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-box" key={product.id}>
          <Product product={product} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
