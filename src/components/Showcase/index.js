import React, { useEffect, useState, useContext } from 'react';
import { CoreContext } from '../../contexts/coreContext';
import { StorageContext } from '../../contexts/storageContext';

import './style.css';

function Showcase() {
  const { allProducts } = useContext(StorageContext);

  return (
    <div className="showcase">
      <ul>
        {allProducts && allProducts.length > 0 ? (
          allProducts.map((product) => (
            <li key={product.id} className="item">
              <p>
                {product.id} - {product.name}
              </p>
              <p>Preço: R$ {product.price}</p>
            </li>
          ))
        ) : (
          <li>
            <p>Nenhum produto disponível.</p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Showcase;
