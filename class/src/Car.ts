/*
  Crear una clase car, 
  se debe saber el estado en el que se encuentra el motor (encendido/apagado)

  se debe saber el kilometraje en un momento dado.

*/



export default class Car {
  model: number;
  engine: boolean;
  kms: number;

  constructor (model: number) {
    this.model = model;
    this.engine = false;
    this.kms = 0;
  }

  turnEngineOn() {
    this.engine = true;
  }

  turnEngineOff() {
    this.engine = false;
  }

  setKms(kms: number) {
    this.kms = kms;
  }

  getKms(): number {
    return this.kms;
  }
}
