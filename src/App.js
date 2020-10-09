import React, { useEffect, useState } from "react";
import "./App.css";

import Showcase from "./components/Showcase";
import PickupSlot from "./components/PickupSlot";
import Selector from "./components/Selector";
import CoinIn from "./components/CoinIn";
import CoinOut from "./components/CoinOut";

import cashRegister from "./modules/cash-register/cash-register";
import storage from "./modules/storage/storage";
import vendingMachine from "./modules/vending-machine/vending-machine";
import {
  products_fixture,
  quantities_fixture,
} from "./fixtures/storage-initial-state-fixture.js";

function App() {
  const [initialProducts, setInitialProducts] = useState([]);

  useEffect(() => {
    const vendingMachineInstance = vendingMachine();
    const cashRegisterInstance = cashRegister([10, 10, 10, 10, 10, 10]);
    const storageInstance = storage(products_fixture, quantities_fixture);

    vendingMachineInstance.registerObserver(cashRegisterInstance);
    vendingMachineInstance.registerObserver(storageInstance);

    const returnedValues = vendingMachineInstance.notifyObservers("start");
    const products = returnedValues[0];
    setInitialProducts(products);
  }, []);

  return (
    <>
      <div className="left-side">
        <Showcase products={initialProducts} />
        <PickupSlot></PickupSlot>
      </div>
      <div className="right-side">
        <Selector></Selector>
        <CoinIn></CoinIn>
        <CoinOut></CoinOut>
      </div>
    </>
  );
}

export default App;
