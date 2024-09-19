import { EstadoEquipo, Inventario } from "./examples/singleton";


console.info('=== Patrón de diseño Singleton ===');

const inventario = Inventario.getInstance()

inventario.agregarEquipo({
  name: 'Laptop',
  type: 'Computadora',
  status: EstadoEquipo.AVAILABLE
})

inventario.agregarEquipo({
  name: 'Mouse',
  type: 'Periférico',
  status: EstadoEquipo.AVAILABLE
})

inventario.agregarEquipo({
  name: 'Monitor',
  type: 'Pantalla',
  status: EstadoEquipo.AVAILABLE
})

console.log(inventario.getEquipos())

