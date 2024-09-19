export enum EquipoType {
  NOTEBOOK = "Notebook",
  DESKTOP = "Desktop",
  SERVER = "Server",
}

interface Equipo {
  type: EquipoType;
  model: string;
  ram: string;
  processor: string;
  detalles: () => string;
}

class Notebook implements Equipo {
  type: EquipoType;
  model: string;
  ram: string;
  processor: string;

  constructor(model: string, ram: string, processor: string) {
    this.type = EquipoType.NOTEBOOK;
    this.model = model;
    this.ram = ram;
    this.processor = processor;
  }

  detalles() {
    return `Tipo: ${this.type}, Nombre: ${this.model} RAM: ${this.ram}, Procesador: ${this.processor}`;
  }
}

class Desktop implements Equipo {
  type: EquipoType;
  model: string;
  ram: string;
  processor: string;

  constructor(model: string, ram: string, processor: string) {
    this.type = EquipoType.DESKTOP;
    this.model = model;
    this.ram = ram;
    this.processor = processor;
  }
  detalles() {
    return `Tipo: ${this.type}, Nombre: ${this.model} RAM: ${this.ram}, Procesador: ${this.processor}`;
  }
}

class Server implements Equipo {
  type: EquipoType;
  model: string;
  ram: string;
  processor: string;

  constructor(model: string, ram: string, processor: string) {
    this.type = EquipoType.SERVER;
    this.model = model;
    this.ram = ram;
    this.processor = processor;
  }
  detalles() {
    return `Tipo: ${this.type}, Nombre: ${this.model} RAM: ${this.ram}, Procesador: ${this.processor}`;
  }
}

export class EquipoFactory {
  crearEquipo(
    type: string,
    model: string,
    ram: string,
    processor: string
  ): Equipo {
    if (type === EquipoType.NOTEBOOK) {
      return new Notebook(model, ram, processor);
    } else if (type === EquipoType.DESKTOP) {
      return new Desktop(model, ram, processor);
    } else if (type === EquipoType.SERVER) {
      return new Server(model, ram, processor);
    }
    throw new Error("Tipo de equipo no soportado");
  }
}
