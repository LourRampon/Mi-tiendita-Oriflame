import React from 'react';

const AddButton = ({ onClick }) => {
  return (
    <button className="add-button" onClick={onClick}>
      Agregar producto
    </button>
  );
};

export default AddButton;
