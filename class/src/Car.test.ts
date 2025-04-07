import Car from "./Car";

describe('Car class', () => {
  it('should return a new car', () => {
    const model = 1883;
    const car = new Car(model);

    expect(car.model).toBe(model);
    expect(car.kms).toBe(0);
    expect(car.engine).toBeFalsy();
  });


  it('should return the model', () => {
    const car = new Car(1995);

    expect(car.model).toBe(1995);
  });

  it('should turn the engine on', () => {
    const car = new Car(12);
    car.turnEngineOn();

    expect(car.engine).toBeTruthy();
  });

  it('should turn the engine off', () => {
    const car = new Car(12);

    car.turnEngineOn();
    car.turnEngineOff();

    expect(car.engine).toBeFalsy();
  });

  it('should set the kms', () => {
    const car = new Car(2001);

    car.setKms(200);

    expect(car.kms).toBe(200);
  });

  it('should return the kms', () => {
    const car = new Car(1244);

    car.setKms(400);

    expect(car.getKms()).toBe(400);
  });
});
