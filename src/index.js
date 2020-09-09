import cashRegister from "./cash-register/cash-register";
import storage from "./storage/storage";
import vendingMachine from "./vending-machine/vending-machine";
import {
  products_fixture,
  quantities_fixture,
} from "./fixtures/storage-initial-state-fixture";

const vendingMachineInstance = vendingMachine();
const cashRegisterInstance = cashRegister([10, 10, 10, 10, 10, 10]);
const storageInstance = storage(products_fixture, quantities_fixture);

vendingMachineInstance.registerObserver(cashRegisterInstance);
vendingMachineInstance.registerObserver(storageInstance);
