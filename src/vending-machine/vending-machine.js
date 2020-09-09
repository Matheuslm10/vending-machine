/**
 * usar dicionário para identificar o
 * evento sendo transmitido e o array
 * de observers correspondentes
 */

function vendingMachine() {
  let state = {
    observers: [],
  };

  function registerObserver(observerFunction) {
    state.observers.push(observerFunction);
  }

  function notifyObservers() {
    for (const observerFunction of state.observers) {
      observerFunction();
    }
  }

  function handleStart() {
    notifyObservers();
  }

  return {
    registerObserver,
  };
}

export default vendingMachine;
