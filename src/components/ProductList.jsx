import React from 'react';
import AddButton from './AddButton';
import DevButton from './DevButton';

const ProductList = ({ products, onAddToCart, onRemoveFromCart}) => {
    return (
      <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <h3 className='product-name'>Nombre: {product.name}</h3>
                    <p className='product-brand'>Marca: {product.brand}</p>
                    <p className='product-line'>Linea: {product.line}</p>
                    <p className='product-description'>Descripcion: {product.description}</p>
                    <img src={product.image} alt={product.name} style={{ ...product.style, display:'block', margin: '0 auto'}}/>
                    <AddButton className="add-button" onClick={() => onAddToCart(product)} />
                    <DevButton className="dev-button" onClick={() => onRemoveFromCart(product.id)} />
                </div>
            ))}
        </div>
    );
}
export default ProductList;

