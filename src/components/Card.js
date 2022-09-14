import React from 'react';

const Card = ({product}) => {
    return (

      <div className="info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>{product.price} euros</h3>

      </div>
        
    );
};

export default Card;