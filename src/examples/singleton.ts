type Equipo = {
  name: string;
  type: string;
  status: EstadoEquipo;
};

export enum EstadoEquipo {
    AVAILABLE = "Disponible",
    IN_USE = "En uso",
    UNDER_REPAIR = "En reparación",
}

export class Inventario {
  private static instance: Inventario;
  private equipos: Equipo[] = [];

  private constructor() {}

  public agregarEquipo(equipo: Equipo) {
    this.equipos.push(equipo);
  }

  public getEquipos(): Equipo[] {
    return this.equipos;
  }

  public static getInstance(): Inventario {
    if (!Inventario.instance) {
      Inventario.instance = new Inventario();
    }

    return Inventario.instance;
  }
}
