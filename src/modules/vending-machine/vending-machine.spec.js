import vending_machine from './vending-machine.js';

describe('Vending Machine', () => {
  let vending_machine_test;

  beforeEach(() => {
    vending_machine_test = vending_machine();
  });

  it('Should have a registerObserver function.', () => {
    expect(vending_machine_test.registerObserver).toBeDefined();
  });
});
