interface Observer {
  notificar: (message: string) => void;
}

export class Soporte implements Observer {
  constructor() {}

  notificar(message: string) {
    console.log(message);
  }
}

export class Equipo {
  private soportes: Soporte[] = [];

  constructor(
    private detalle: string,
    private tipo: string,
    private status: string
  ) {}


  obtenerDetalle(): string {
    return this.tipo + ' ' + this.detalle
  }

  agregarObservador(soporte: Soporte) {
    this.soportes.push(soporte);
  }

  cambiarEstado(status: string) {
    this.status = status;
    this.notificarObservadores();
  }

  private notificarObservadores() {
    this.soportes.forEach((e) =>
      e.notificar(
        `Soporte notificado: ${this.obtenerDetalle()} ha cambiado su estado a: ${this.status}.`
      )
    );
  }
}
