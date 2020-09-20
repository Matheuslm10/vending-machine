import cashRegister from "./cash-register/cash-register.mjs";
import storage from "./storage/storage.mjs";
import vendingMachine from "./vending-machine/vending-machine.mjs";
import {
  products_fixture,
  quantities_fixture,
} from "./fixtures/storage-initial-state-fixture.mjs";

const vendingMachineInstance = vendingMachine();
const cashRegisterInstance = cashRegister([10, 10, 10, 10, 10, 10]);
const storageInstance = storage(products_fixture, quantities_fixture);

vendingMachineInstance.registerObserver(cashRegisterInstance);
vendingMachineInstance.registerObserver(storageInstance);

// vendingMachineInstance.notifyObservers("start");

// vendingMachineInstance.notifyObservers("choice", [
//   { productId: 3, quantity: 1 },
//   { productId: 4, quantity: 2 },
// ]);

// vendingMachineInstance.notifyObservers("perform_purchase", {
//   deposit: [5, 3, 0, 0, 0, 0],
//   price: 2.0,
// });

// vendingMachineInstance.notifyObservers("deposit", [30, 30, 30, 30, 30, 30]);
