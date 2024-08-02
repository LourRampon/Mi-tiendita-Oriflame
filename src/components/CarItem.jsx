import React from 'react';

const CartItem = ({ item }) => {
  return (
    <li>
      {item.name} - ${item.price}
    </li>
  );
};

export default CartItem;