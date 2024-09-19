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

const factory = new EquipoFactory();

const notebook = factory.crearEquipo(
  EquipoType.NOTEBOOK,
  "Macbook Pro",
  "16GB",
  "Intel Core i7"
);

console.log(notebook.detalles());
