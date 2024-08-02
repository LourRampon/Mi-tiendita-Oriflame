import React from 'react';

function Cart({ cart, onRemoveFromCart }) {
    return (
        <div className="cart">
            <ul>
                {cart.map(product => (
                    <li key={product.id}>
                        <div className="cart-item">
                            <img src={product.image} alt={product.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <p className="cart-item-name">{product.name}</p>
                                <p className="cart-item-price">${product.price}</p>
                                <button onClick={() => onRemoveFromCart(product.id)} className="cart-item-remove">
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
