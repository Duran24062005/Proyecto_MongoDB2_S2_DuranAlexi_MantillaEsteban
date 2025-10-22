# Escuelas de Música

**Campus Music** es una empresa que administra múltiples escuelas de música en diferentes ciudades.

Actualmente, usan hojas de cálculo para registrar estudiantes, profesores, cursos e inscripciones, lo que causa duplicación de datos y errores.

Han decidido migrar a **MongoDB** para mejorar la flexibilidad, manejar la información de manera unificada, y soportar operaciones transaccionales en inscripciones. Tu rol será diseñar esta solución, poblarla con datos realistas, implementar consultas analíticas, definir roles de seguridad y demostrar el uso de transacciones.



## Requisitos funcionales del sistema

### Funcionalidad esperada

El sistema debe permitir:

- Registro de **estudiantes** (nombre, documento, contacto, nivel musical).
- Registro de **profesores** (especialidad, experiencia, cursos asignados).
- Registro de **cursos** (instrumento, nivel, duración, cupos, horario).
- Registro de **sedes** (ciudad, dirección, capacidad, cursos disponibles).
- Gestión de **usuarios** con roles:
- **Administrador**: acceso total.
- **Empleado de sede**: acceso limitado a la sede.
- **Estudiante**: acceso a su información, inscripción y consulta de cursos disponibles.
- **Inscripción de estudiantes** en cursos:
- Validar cupos disponibles.
- tener en cuenta costo y fechaInscripcion.
- Asociar estudiante con curso, sede y profesor.
- Actualizar cupo automáticamente mediante transacción.
- **Reservas de instrumentos** por parte de estudiantes (ej: piano, guitarra, violín).
- Reportes y consultas analíticas:
- Ocupación de cursos por sede.
- Cursos más demandados.
- Profesores con más estudiantes asignados.
- Instrumentos más reservados.
- Histórico de cursos tomados por cada estudiante.

## Estructura del repositorio

```
Tu proyecto debe tener la siguiente estructura y archivos:

📁 campus_music
├── db_config.js         # Creación de colecciones con $jsonSchema e índices
├── test_dataset.js      # Poblamiento de la base con datos de prueba realistas
├── aggregations.js      # Consultas analíticas con framework de agregación
├── roles.js             # Definición de roles y permisos
├── transactions.js      # Transacción de inscripción en curso
└── README.md            # Documentación completa
```

## 

## Descripción detallada de cada archivo

1. db_config.js

**Objetivo:** Definir y crear todas las colecciones del sistema. Cada colección debe tener:

- Un **esquema de validación** $jsonSchema completo:
- Tipos de datos (string, int, date, etc.)
- Campos requeridos
- Reglas de negocio (por ejemplo, valores permitidos con enum)
- Estructuras embebidas si aplica
- **Índices** definidos según las necesidades del sistema:
- Índices simples (ej: placa, cedula)
- Índices compuestos (ej: zona + estado)

Colecciones mínimas obligatorias:

- usuarios (administradores, empleados, estudiantes).
- profesores
- estudiantes
- sedes
- cursos
- inscripciones
- instrumentos
- reservas_instrumentos

2. test_dataset.js

**Objetivo:** Poblar el sistema con datos de prueba coherentes y variados. Usar insertMany.

Debe incluir:

- 3 **sedes** (Ej. Bogotá, Medellín, Cali).
- 5 **cursos por sede** (ej: Piano Básico, Guitarra Intermedia, Violín Avanzado, Teoría Musical, Canto).
- 10 **profesores** con distintas especialidades.
- 15 **estudiantes** con distintos niveles (básico, intermedio, avanzado).
- 20 **instrumentos disponibles** para préstamo (ej: guitarras, pianos, violines).
- 30 **inscripciones**, con estudiantes inscritos en cursos diversos.
- 10 **reservas de instrumentos**.

3. aggregations.js

**Objetivo**: Resolver las siguientes preguntas usando agregaciones de MongoDB. Cada consulta debe estar comentada y explicada.

1. ¿Cuántos estudiantes se inscribieron por sede en el último mes?
2. ¿Cuáles son los cursos más demandados en cada sede?
3. ¿Cuál es el ingreso total generado por inscripciones en cada sede?
4. ¿Qué profesor tiene más estudiantes asignados?
5. ¿Qué instrumento es el más reservado?
6. Mostrar el **historial de cursos de un estudiante** (fecha, sede, curso, profesor, nivel, costo).
7. Listar los **cursos actualmente en ejecución** en cada sede.
8. Detectar cursos que **excedieron el cupo** permitido en algún momento.

4. roles.js

**Objetivo**: Crear y asignar roles con diferentes permisos sobre la base de datos.

Debe incluir:

**Administrador**

- Lectura y escritura total.
- Puede crear usuarios, sedes, cursos, instrumentos.

**Empleado de sede**

- Lectura de estudiantes, profesores y cursos en su sede.
- Puede registrar inscripciones y reservas.
- No puede ver información de otras sedes.

**Estudiante**

- Lectura de su propia información.
- Consulta de cursos disponibles.
- Consulta de su historial de inscripciones.
- Puede reservar instrumentos.

Usar db.createRole() y db.grantRolesToUser() correctamente.

5. transactions.js

**Objetivo**: Crear una transacción MongoDB entre al menos dos colecciones.

Escenario de transacción:

​	 **Inscribir estudiante en un curso**

Pasos:

1. Insertar documento en colección inscripciones.
2. Decrementar cupos_disponibles en la colección cursos.
3. Manejar errores con rollback si algo falla.

Debe incluir:

- Inicio y commit/abort de la transacción.
- Manejo de errores con rollback.
- Comentarios explicando cada paso.

Resultado esperado

Documentar TODO el proyecto en en repositorio de GitHub privado y compartido con las cuentas que el Trainer indique. Este repositorio debe tener un Readme que incluya como mínimo:

Introducción al proyecto

- Justificación del uso de MongoDB
- Diseño del modelo de datos:
- Colecciones creadas
- Decisiones de uso de referencias o embebidos
- Validaciones $jsonSchema
- Explicación de validaciones por colección
- Índices
- Lista de índices creados
- Justificación técnica de su uso
- Estructura de los datos de prueba
- Explicación de cada agregación
- Transacción MongoDB
- Escenario utilizado
- Código explicado paso a paso
- Roles
- Descripción de cada rol
- Ejemplo de creación de usuarios con esos roles
- Conclusiones y mejoras posibles