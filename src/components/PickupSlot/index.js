import React, { useContext } from 'react';
import { StorageContext } from '../../contexts/storageContext';

import './style.css';

function PickupSlot() {
  const { pickupSlotProducts } = useContext(StorageContext);

  return (
    <div className="pickup-slot">
      <p>Retire seus produtos aqui:</p>
      {pickupSlotProducts.id && (
        <p>
          {pickupSlotProducts.quantity} de {pickupSlotProducts.name}
        </p>
      )}
    </div>
  );
}

export default PickupSlot;
