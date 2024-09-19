import { EstadoEquipo, Inventario } from "./examples/singleton";

console.info("=== Patrón de diseño Singleton ===");

const inventario = Inventario.getInstance();

inventario.agregarEquipo({
  name: "Laptop",
  type: "Computadora",
  status: EstadoEquipo.AVAILABLE,
});

inventario.agregarEquipo({
  name: "Mouse",
  type: "Periférico",
  status: EstadoEquipo.AVAILABLE,
});

inventario.agregarEquipo({
  name: "Monitor",
  type: "Pantalla",
  status: EstadoEquipo.AVAILABLE,
});

console.log(inventario.listarEquipos());

console.info("=== Patrón de diseño Factory Method ===");

import { EquipoFactory, EquipoType } from "./examples/factory-method";
import { Equipo, Soporte } from "./examples/observer";

const factory = new EquipoFactory();

const notebook = factory.crearEquipo(
  EquipoType.NOTEBOOK,
  "Macbook Pro",
  "16GB",
  "Intel Core i7"
);

console.log(notebook.detalles());

console.info("=== Patrón de diseño Observer ===");

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
equipo.cambiarEstado("reparado")