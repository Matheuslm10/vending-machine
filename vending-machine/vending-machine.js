function vendingMachine() {
  let state = {
    observers: [],
  };

  document.addEventListener("start", handleStart);

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
