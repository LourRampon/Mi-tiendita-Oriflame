import React from 'react';

const DevButton = ({ onClick }) => {
  return (
    <button className="dev-button" onClick={onClick}>
      Devolver producto
    </button>
  );
};

export default DevButton;
