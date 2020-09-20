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

  function notifyObservers(event, payload) {
    for (const observer of state.observers) {
      console.log(observer.update(event, payload));
    }
  }

  return {
    registerObserver,
    notifyObservers,
  };
}

export default vendingMachine;
