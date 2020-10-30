import React from 'react';
import './App.css';

import Showcase from './components/Showcase';
import PickupSlot from './components/PickupSlot';
import Selector from './components/Selector';
import CoinIn from './components/CoinIn';
import CoinOut from './components/CoinOut';
import { StorageContextProvider } from './contexts/storageContext';
import { CoreContextProvider } from './contexts/coreContext';
import { CashRegisterContextProvider } from './contexts/cashRegisterContext';

function App() {
  return (
    <>
      <CoreContextProvider>
        <StorageContextProvider>
          <CashRegisterContextProvider>
            <div className="left-side">
              <Showcase />
              <PickupSlot></PickupSlot>
            </div>
            <div className="right-side">
              <Selector></Selector>
              <CoinIn></CoinIn>
              <CoinOut></CoinOut>
            </div>
          </CashRegisterContextProvider>
        </StorageContextProvider>
      </CoreContextProvider>
    </>
  );
}

export default App;
