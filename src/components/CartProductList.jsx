import React from 'react';

const CartProductList = ({ products, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="cart-product-list">
      {products.map((product) => (
        <div key={product.id} className="cart-product-card">
          <img src={product.image} alt={product.name} className="cart-product-image" />
          <span className="product-name">{product.name}</span>
          <button className="dev-button" onClick={() => onRemoveFromCart(product.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default CartProductList;
