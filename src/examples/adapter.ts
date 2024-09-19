export type Equipo = {
  name: string;
  type: string;
  status: EstadoEquipo;
};

export enum EstadoEquipo {
  AVAILABLE = "Disponible",
  IN_USE = "En uso",
  UNDER_REPAIR = "En reparación",
}

interface IInventario {
  addItem(item: Equipo): void;
  items: Equipo[];
}

export class InventarioViejo {
  private equipos: Equipo[] = [];

  agregarItem(item: Equipo) {
    this.equipos.push(item);
  }

  listarEquiposEnInventario(): Equipo[] {
    return this.equipos;
  }
}

export class AdaptadorInventario implements IInventario {
  constructor(
    private inventarioViejo: InventarioViejo,
    public items: Equipo[] = []
  ) {}

  addItem(item: Equipo): void {
    this.inventarioViejo.agregarItem(item);
  }

  listarEquipos() {
    return this.inventarioViejo.listarEquiposEnInventario();
  }
}
