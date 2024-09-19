
# Ejercicios sobre Sistema de Inventario de Equipos Informáticos en TypeScript

## Ejercicio 1: Implementar Patrón Singleton para el Inventario

**Objetivo**: Implementar un patrón **Singleton** para gestionar un inventario de equipos informáticos.

### Pasos que realice para resolver el ejercicio

- Cree una clase `Inventario` que sigue el patrón Singleton.
- Esta clase tiene como atributo su instancia y `equipos` que es un array de objetos de tipo `Equipo` que a su vez tienen los siguientes atributos `nombre`, `tipo` y `estado`.
- Cree un Enum con los estados que el sistema va a permitir registrar para cada equipo.
- Agregue un método `agregarEquipo` que recibe como parámetro un objeto `Equipo` para agregar el mismo al listado y un método `listarEquipos` para devolver la lista completa de equipos registrados.

### Código

![Imagen](/src/examples/img/singleton-code.png)

### Log

![Imagen](/src/examples/img/singleton-log.png)

## Ejercicio 2: Implementar Patrón Factory Method para Crear Equipos

**Objetivo**: Utilizar el patrón **Factory Method** para crear diferentes tipos de equipos.

- Cree las clases específicas para cada tipo de equipo (Notebook, Desktop, Servidor), cada una con sus propias propiedades.
- Cree una clase EquipoFactory con un método crearEquipo que recibe como parámetro el tipo y las características, basado en el tipo de equipo, devuelve una instancia de la clase adecuada, en mi caso definí los tipos con un enum.
- Luego ejecuté el método `detalles()` para obtener la información formateada del equipo.

### Código del ejemplo

![Imagen](/src/examples/img/factory-method-code.png)

### Log

![Imagen](/src/examples/img/factory-method-log.png)


## Ejercicio 3: Implementar Patrón Observer para Seguimiento del Estado

**Objetivo**: Utilizar el patrón **Observer** para notificar a un departamento de soporte cuando un equipo cambia de estado.

## Ejercicio 4: Adaptador para Cambiar la Interfaz de Inventarios Viejos

**Objetivo**: Implementar el patrón **Adaptador** para integrar una clase antigua de inventario con el nuevo sistema.
