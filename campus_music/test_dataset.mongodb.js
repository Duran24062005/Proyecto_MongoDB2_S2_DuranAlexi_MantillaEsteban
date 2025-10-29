// ==================== POBLAMIENTO BASE DE DATOS - SISTEMA MUSICAL ====================
// Archivo: test_dataset.js
// Descripción: Datos de prueba realistas basados en el diagrama ER proporcionado

// Conectar a la base de datos
use('Campus_Music');


// ==================== 1. ROLES ====================
db.roles.insertMany([
  { _id: 1, nombre: "Administrador" },
  { _id: 2, nombre: "Empleado_Sede" },
  { _id: 3, nombre: "Estudiante" },
  { _id: 4, nombre: "Profesor" }
]);

// ==================== 2. SEDES ====================
db.sedes.insertMany([
  {
    _id: 1,
    ciudad: "Bogotá",
    direccion: "Calle 72 #10-34, Chapinero",
    capacidad: 150,
    cursos_disponibles: 12,
    n_estudiantes: 85
  },
  {
    _id: 2,
    ciudad: "Medellín",
    direccion: "Carrera 43A #1-50, El Poblado",
    capacidad: 120,
    cursos_disponibles: 10,
    n_estudiantes: 67
  },
  {
    _id: 3,
    ciudad: "Cali",
    direccion: "Avenida 6N #28-10, Granada",
    capacidad: 100,
    cursos_disponibles: 8,
    n_estudiantes: 54
  },
  {
    _id: 4,
    ciudad: "Barranquilla",
    direccion: "Calle 93 #43-120, El Prado",
    capacidad: 90,
    cursos_disponibles: 7,
    n_estudiantes: 48
  }
]);

// ==================== 3. USUARIOS ====================
db.usuarios.insertMany([
  // Administradores
  {
    _id: 1,
    nombre_usuario: "Carlos Méndez",
    documento: "1234567890",
    contacto: "3101234567",
    email: "carlos.mendez@campusmusic.com",
    direccion: "Calle 80 #15-20, Bogotá",
    rol_id: 1
  },
  {
    _id: 2,
    nombre_usuario: "Laura Ramírez",
    documento: "9876543210",
    contacto: "3209876543",
    email: "laura.ramirez@campusmusic.com",
    direccion: "Carrera 50 #20-30, Medellín",
    rol_id: 1
  },
  // Empleados de Sede
  {
    _id: 3,
    nombre_usuario: "Andrea Torres",
    documento: "1122334455",
    contacto: "3151122334",
    email: "andrea.torres@campusmusic.com",
    direccion: "Avenida 5 #10-15, Cali",
    rol_id: 2
  },
  {
    _id: 4,
    nombre_usuario: "Miguel Ángel Rojas",
    documento: "5544332211",
    contacto: "3165544332",
    email: "miguel.rojas@campusmusic.com",
    direccion: "Calle 72 #40-50, Barranquilla",
    rol_id: 2
  },
  // Profesores
  {
    _id: 5,
    nombre_usuario: "Sofía Martínez",
    documento: "2233445566",
    contacto: "3172233445",
    email: "sofia.martinez@campusmusic.com",
    direccion: "Carrera 11 #82-20, Bogotá",
    rol_id: 4
  },
  {
    _id: 6,
    nombre_usuario: "Ricardo Gómez",
    documento: "6655443322",
    contacto: "3186655443",
    email: "ricardo.gomez@campusmusic.com",
    direccion: "Calle 45 #30-15, Medellín",
    rol_id: 4
  },
  {
    _id: 7,
    nombre_usuario: "Diana Paola Herrera",
    documento: "3344556677",
    contacto: "3193344556",
    email: "diana.herrera@campusmusic.com",
    direccion: "Avenida 3N #25-40, Cali",
    rol_id: 4
  },
  {
    _id: 8,
    nombre_usuario: "Juan Pablo Vargas",
    documento: "7766554433",
    contacto: "3007766554",
    email: "juan.vargas@campusmusic.com",
    direccion: "Calle 85 #50-30, Barranquilla",
    rol_id: 4
  },
  {
    _id: 9,
    nombre_usuario: "Valentina Ruiz",
    documento: "4455667788",
    contacto: "3014455667",
    email: "valentina.ruiz@campusmusic.com",
    direccion: "Carrera 15 #90-25, Bogotá",
    rol_id: 4
  },
  {
    _id: 10,
    nombre_usuario: "Andrés Felipe Castro",
    documento: "8877665544",
    contacto: "3028877665",
    email: "andres.castro@campusmusic.com",
    direccion: "Calle 10 #40-20, Medellín",
    rol_id: 4
  },
  {
    _id: 11,
    nombre_usuario: "Camila Sánchez",
    documento: "5566778899",
    contacto: "3035566778",
    email: "camila.sanchez@campusmusic.com",
    direccion: "Avenida 6 #15-30, Cali",
    rol_id: 4
  },
  {
    _id: 12,
    nombre_usuario: "Fernando López",
    documento: "9988776655",
    contacto: "3049988776",
    email: "fernando.lopez@campusmusic.com",
    direccion: "Carrera 51B #80-25, Barranquilla",
    rol_id: 4
  },
  // Estudiantes
  {
    _id: 13,
    nombre_usuario: "María Fernanda Díaz",
    documento: "1010101010",
    contacto: "3111010101",
    email: "maria.diaz@estudiante.com",
    direccion: "Calle 60 #8-15, Bogotá",
    rol_id: 3
  },
  {
    _id: 14,
    nombre_usuario: "Daniel Santiago Pérez",
    documento: "2020202020",
    contacto: "3122020202",
    email: "daniel.perez@estudiante.com",
    direccion: "Carrera 70 #25-40, Bogotá",
    rol_id: 3
  },
  {
    _id: 15,
    nombre_usuario: "Isabella García",
    documento: "3030303030",
    contacto: "3133030303",
    email: "isabella.garcia@estudiante.com",
    direccion: "Calle 48 #35-20, Medellín",
    rol_id: 3
  },
  {
    _id: 16,
    nombre_usuario: "Sebastián Moreno",
    documento: "4040404040",
    contacto: "3144040404",
    email: "sebastian.moreno@estudiante.com",
    direccion: "Carrera 39 #10-50, Medellín",
    rol_id: 3
  },
  {
    _id: 17,
    nombre_usuario: "Lucía Jiménez",
    documento: "5050505050",
    contacto: "3155050505",
    email: "lucia.jimenez@estudiante.com",
    direccion: "Avenida 4N #20-30, Cali",
    rol_id: 3
  },
  {
    _id: 18,
    nombre_usuario: "Mateo Ortiz",
    documento: "6060606060",
    contacto: "3166060606",
    email: "mateo.ortiz@estudiante.com",
    direccion: "Calle 15 #25-10, Cali",
    rol_id: 3
  },
  {
    _id: 19,
    nombre_usuario: "Mariana Silva",
    documento: "7070707070",
    contacto: "3177070707",
    email: "mariana.silva@estudiante.com",
    direccion: "Carrera 44 #70-15, Barranquilla",
    rol_id: 3
  },
  {
    _id: 20,
    nombre_usuario: "Samuel Reyes",
    documento: "8080808080",
    contacto: "3188080808",
    email: "samuel.reyes@estudiante.com",
    direccion: "Calle 90 #55-30, Barranquilla",
    rol_id: 3
  },
  {
    _id: 21,
    nombre_usuario: "Valentina Gutiérrez",
    documento: "9090909090",
    contacto: "3199090909",
    email: "valentina.gutierrez@estudiante.com",
    direccion: "Carrera 13 #75-20, Bogotá",
    rol_id: 3
  },
  {
    _id: 22,
    nombre_usuario: "Nicolás Muñoz",
    documento: "1212121212",
    contacto: "3001212121",
    email: "nicolas.munoz@estudiante.com",
    direccion: "Calle 55 #18-45, Bogotá",
    rol_id: 3
  },
  {
    _id: 23,
    nombre_usuario: "Sofía Alejandra Cruz",
    documento: "1313131313",
    contacto: "3011313131",
    email: "sofia.cruz@estudiante.com",
    direccion: "Carrera 80 #30-25, Medellín",
    rol_id: 3
  },
  {
    _id: 24,
    nombre_usuario: "David Henao",
    documento: "1414141414",
    contacto: "3021414141",
    email: "david.henao@estudiante.com",
    direccion: "Calle 30 #50-10, Medellín",
    rol_id: 3
  },
  {
    _id: 25,
    nombre_usuario: "Emma Rodríguez",
    documento: "1515151515",
    contacto: "3031515151",
    email: "emma.rodriguez@estudiante.com",
    direccion: "Avenida 2 #18-35, Cali",
    rol_id: 3
  },
  {
    _id: 26,
    nombre_usuario: "Tomás Álvarez",
    documento: "1616161616",
    contacto: "3041616161",
    email: "tomas.alvarez@estudiante.com",
    direccion: "Calle 12 #22-40, Cali",
    rol_id: 3
  },
  {
    _id: 27,
    nombre_usuario: "Gabriela Montoya",
    documento: "1717171717",
    contacto: "3051717171",
    email: "gabriela.montoya@estudiante.com",
    direccion: "Carrera 38 #65-20, Barranquilla",
    rol_id: 3
  },
  {
    _id: 28,
    nombre_usuario: "Alejandro Paredes",
    documento: "1818181818",
    contacto: "3061818181",
    email: "alejandro.paredes@estudiante.com",
    direccion: "Calle 76 #48-15, Barranquilla",
    rol_id: 3
  }
]);

// ==================== 4. PROFESORES ====================
db.profesores.insertMany([
  { _id: 1, usuario_id: 21, especialidad: "Piano", experiencia_anios: 3, id_sede: 1 },
  { _id: 2, usuario_id: 22, especialidad: "Guitarra", experiencia_anios: 5, id_sede: 1 },
  { _id: 3, usuario_id: 23, especialidad: "Violín", experiencia_anios: 7, id_sede: 1 },
  { _id: 4, usuario_id: 24, especialidad: "Batería", experiencia_anios: 4, id_sede: 1 },
  { _id: 5, usuario_id: 25, especialidad: "Canto", experiencia_anios: 6, id_sede: 1 },
  { _id: 6, usuario_id: 26, especialidad: "Piano", experiencia_anios: 4, id_sede: 2 },
  { _id: 7, usuario_id: 27, especialidad: "Guitarra", experiencia_anios: 8, id_sede: 2 },
  { _id: 8, usuario_id: 28, especialidad: "Percusión", experiencia_anios: 3, id_sede: 2 },
  { _id: 9, usuario_id: 29, especialidad: "Teclado", experiencia_anios: 5, id_sede: 2 },
  { _id: 10, usuario_id: 30, especialidad: "Canto", experiencia_anios: 2, id_sede: 2 },
  { _id: 11, usuario_id: 31, especialidad: "Violín", experiencia_anios: 6, id_sede: 3 },
  { _id: 12, usuario_id: 32, especialidad: "Bajo", experiencia_anios: 4, id_sede: 3 },
  { _id: 13, usuario_id: 33, especialidad: "Canto", experiencia_anios: 7, id_sede: 3 },
  { _id: 14, usuario_id: 34, especialidad: "Guitarra", experiencia_anios: 5, id_sede: 3 },
  { _id: 15, usuario_id: 35, especialidad: "Piano", experiencia_anios: 9, id_sede: 3 },
  { _id: 16, usuario_id: 36, especialidad: "Batería", experiencia_anios: 5, id_sede: 4 },
  { _id: 17, usuario_id: 37, especialidad: "Guitarra", experiencia_anios: 10, id_sede: 4 },
  { _id: 18, usuario_id: 38, especialidad: "Teclado", experiencia_anios: 6, id_sede: 4 },
  { _id: 19, usuario_id: 39, especialidad: "Percusión", experiencia_anios: 4, id_sede: 4 },
  { _id: 20, usuario_id: 40, especialidad: "Canto", experiencia_anios: 3, id_sede: 4 }
]);


// ==================== 5. ESTUDIANTES ====================
db.estudiantes.insertMany([
  { _id: 1, usuario_id: 13, id_sede: 1, nivel_musical: "Principiante" },
  { _id: 2, usuario_id: 14, id_sede: 1, nivel_musical: "Intermedio" },
  { _id: 3, usuario_id: 15, id_sede: 2, nivel_musical: "Principiante" },
  { _id: 4, usuario_id: 16, id_sede: 2, nivel_musical: "Avanzado" },
  { _id: 5, usuario_id: 17, id_sede: 3, nivel_musical: "Intermedio" },
  { _id: 6, usuario_id: 18, id_sede: 3, nivel_musical: "Principiante" },
  { _id: 7, usuario_id: 19, id_sede: 4, nivel_musical: "Avanzado" },
  { _id: 8, usuario_id: 20, id_sede: 4, nivel_musical: "Intermedio" },
  { _id: 9, usuario_id: 21, id_sede: 1, nivel_musical: "Avanzado" },
  { _id: 10, usuario_id: 22, id_sede: 1, nivel_musical: "Principiante" },
  { _id: 11, usuario_id: 23, id_sede: 2, nivel_musical: "Intermedio" },
  { _id: 12, usuario_id: 24, id_sede: 2, nivel_musical: "Avanzado" },
  { _id: 13, usuario_id: 25, id_sede: 3, nivel_musical: "Principiante" },
  { _id: 14, usuario_id: 26, id_sede: 3, nivel_musical: "Intermedio" },
  { _id: 15, usuario_id: 27, id_sede: 4, nivel_musical: "Principiante" },
  { _id: 16, usuario_id: 28, id_sede: 4, nivel_musical: "Avanzado" }
]);

// ==================== 6. CURSOS ====================
db.cursos.insertMany([
  // === SEDE 1: Bogotá ===
  {
    _id: 1,
    nombre_curso: "Piano Básico",
    instrumento: "Piano",
    horario: "Lunes y Miércoles 3-5pm",
    cupos: 10,
    duracion_meses: 3,
    nivel: "Principiante",
    costo: 150000,
    sede_id: 1,
    profesor_id: 1
  },
  {
    _id: 2,
    nombre_curso: "Guitarra Intermedia",
    instrumento: "Guitarra",
    horario: "Martes y Jueves 2-4pm",
    cupos: 12,
    duracion_meses: 4,
    nivel: "Intermedio",
    costo: 200000,
    sede_id: 1,
    profesor_id: 2
  },
  {
    _id: 3,
    nombre_curso: "Canto Avanzado",
    instrumento: "Voz",
    horario: "Viernes 9-12pm",
    cupos: 8,
    duracion_meses: 5,
    nivel: "Avanzado",
    costo: 250000,
    sede_id: 1,
    profesor_id: 3
  },
  {
    _id: 4,
    nombre_curso: "Batería Principiante",
    instrumento: "Batería",
    horario: "Martes y Jueves 10-12pm",
    cupos: 10,
    duracion_meses: 3,
    nivel: "Principiante",
    costo: 150000,
    sede_id: 1,
    profesor_id: 4
  },
  {
    _id: 5,
    nombre_curso: "Violín Profesional",
    instrumento: "Violín",
    horario: "Sábados 8-12pm",
    cupos: 6,
    duracion_meses: 6,
    nivel: "Profesional",
    costo: 300000,
    sede_id: 1,
    profesor_id: 5
  },

  // === SEDE 2: Medellín ===
  {
    _id: 6,
    nombre_curso: "Guitarra Básica",
    instrumento: "Guitarra",
    horario: "Lunes y Miércoles 4-6pm",
    cupos: 10,
    duracion_meses: 3,
    nivel: "Principiante",
    costo: 150000,
    sede_id: 2,
    profesor_id: 6
  },
  {
    _id: 7,
    nombre_curso: "Bajo Intermedio",
    instrumento: "Bajo",
    horario: "Martes y Jueves 2-5pm",
    cupos: 10,
    duracion_meses: 4,
    nivel: "Intermedio",
    costo: 200000,
    sede_id: 2,
    profesor_id: 7
  },
  {
    _id: 8,
    nombre_curso: "Canto Profesional",
    instrumento: "Voz",
    horario: "Viernes 10-1pm",
    cupos: 6,
    duracion_meses: 6,
    nivel: "Profesional",
    costo: 300000,
    sede_id: 2,
    profesor_id: 8
  },
  {
    _id: 9,
    nombre_curso: "Piano Intermedio",
    instrumento: "Piano",
    horario: "Martes y Jueves 8-10am",
    cupos: 12,
    duracion_meses: 4,
    nivel: "Intermedio",
    costo: 200000,
    sede_id: 2,
    profesor_id: 9
  },
  {
    _id: 10,
    nombre_curso: "Percusión Avanzada",
    instrumento: "Percusión",
    horario: "Sábados 2-6pm",
    cupos: 8,
    duracion_meses: 5,
    nivel: "Avanzado",
    costo: 250000,
    sede_id: 2,
    profesor_id: 10
  },

  // === SEDE 3: Cali ===
  {
    _id: 11,
    nombre_curso: "Violín Básico",
    instrumento: "Violín",
    horario: "Lunes y Miércoles 2-4pm",
    cupos: 10,
    duracion_meses: 3,
    nivel: "Principiante",
    costo: 150000,
    sede_id: 3,
    profesor_id: 11
  },
  {
    _id: 12,
    nombre_curso: "Saxofón Intermedio",
    instrumento: "Saxofón",
    horario: "Martes y Jueves 3-5pm",
    cupos: 12,
    duracion_meses: 4,
    nivel: "Intermedio",
    costo: 200000,
    sede_id: 3,
    profesor_id: 12
  },
  {
    _id: 13,
    nombre_curso: "Canto Avanzado Cali",
    instrumento: "Voz",
    horario: "Viernes 8-11am",
    cupos: 8,
    duracion_meses: 5,
    nivel: "Avanzado",
    costo: 250000,
    sede_id: 3,
    profesor_id: 13
  },
  {
    _id: 14,
    nombre_curso: "Piano Profesional Cali",
    instrumento: "Piano",
    horario: "Sábados 9-1pm",
    cupos: 6,
    duracion_meses: 6,
    nivel: "Profesional",
    costo: 300000,
    sede_id: 3,
    profesor_id: 14
  },
  {
    _id: 15,
    nombre_curso: "Guitarra Avanzada Cali",
    instrumento: "Guitarra",
    horario: "Martes y Jueves 6-8pm",
    cupos: 10,
    duracion_meses: 4,
    nivel: "Avanzado",
    costo: 250000,
    sede_id: 3,
    profesor_id: 15
  },

  // === SEDE 4: Barranquilla ===
  {
    _id: 16,
    nombre_curso: "Batería Básica",
    instrumento: "Batería",
    horario: "Lunes y Miércoles 10-12pm",
    cupos: 10,
    duracion_meses: 3,
    nivel: "Principiante",
    costo: 150000,
    sede_id: 4,
    profesor_id: 16
  },
  {
    _id: 17,
    nombre_curso: "Piano Intermedio Barranquilla",
    instrumento: "Piano",
    horario: "Martes y Jueves 1-3pm",
    cupos: 12,
    duracion_meses: 4,
    nivel: "Intermedio",
    costo: 200000,
    sede_id: 4,
    profesor_id: 17
  },
  {
    _id: 18,
    nombre_curso: "Violín Avanzado Barranquilla",
    instrumento: "Violín",
    horario: "Viernes 3-6pm",
    cupos: 8,
    duracion_meses: 5,
    nivel: "Avanzado",
    costo: 250000,
    sede_id: 4,
    profesor_id: 18
  },
  {
    _id: 19,
    nombre_curso: "Canto Profesional Barranquilla",
    instrumento: "Voz",
    horario: "Sábados 8-12pm",
    cupos: 6,
    duracion_meses: 6,
    nivel: "Profesional",
    costo: 300000,
    sede_id: 4,
    profesor_id: 19
  },
  {
    _id: 20,
    nombre_curso: "Guitarra Avanzada Barranquilla",
    instrumento: "Guitarra",
    horario: "Martes y Jueves 6-8pm",
    cupos: 10,
    duracion_meses: 4,
    nivel: "Avanzado",
    costo: 250000,
    sede_id: 4,
    profesor_id: 20
  }
]);



// ==================== 7. INSTRUMENTOS ====================
db.instrumentos.insertMany([
  // Sede Bogotá
  { _id: 1, nombre_instu: "Piano Yamaha C3", disponibilidad: "Disponible", id_sede: 1 },
  { _id: 2, nombre_instu: "Piano Kawai K-300", disponibilidad: "Disponible", id_sede: 1 },
  { _id: 3, nombre_instu: "Piano Roland FP-30X", disponibilidad: "Reservado", id_sede: 1 },
  { _id: 4, nombre_instu: "Micrófono Shure SM58", disponibilidad: "Disponible", id_sede: 1 },
  { _id: 5, nombre_instu: "Micrófono Sennheiser e835", disponibilidad: "Disponible", id_sede: 1 },
  // Sede Medellín
  { _id: 6, nombre_instu: "Guitarra Acústica Yamaha FG800", disponibilidad: "Disponible", id_sede: 2 },
  { _id: 7, nombre_instu: "Guitarra Eléctrica Fender Stratocaster", disponibilidad: "Reservado", id_sede: 2 },
  { _id: 8, nombre_instu: "Guitarra Eléctrica Gibson Les Paul", disponibilidad: "Disponible", id_sede: 2 },
  { _id: 9, nombre_instu: "Bajo Fender Precision", disponibilidad: "Disponible", id_sede: 2 },
  { _id: 10, nombre_instu: "Amplificador Marshall MG50", disponibilidad: "Disponible", id_sede: 2 },
  // Sede Cali
  { _id: 11, nombre_instu: "Violín Stradivarius (Réplica)", disponibilidad: "Reservado", id_sede: 3 },
  { _id: 12, nombre_instu: "Violín Yamaha V3", disponibilidad: "Disponible", id_sede: 3 },
  { _id: 13, nombre_instu: "Violín Stentor Student II", disponibilidad: "Disponible", id_sede: 3 },
  { _id: 14, nombre_instu: "Saxofón Alto Yamaha YAS-280", disponibilidad: "Disponible", id_sede: 3 },
  { _id: 15, nombre_instu: "Saxofón Tenor Selmer", disponibilidad: "En mantenimiento", id_sede: 3 },
  // Sede Barranquilla
  { _id: 16, nombre_instu: "Batería Pearl Export", disponibilidad: "Disponible", id_sede: 4 },
  { _id: 17, nombre_instu: "Batería Tama Imperialstar", disponibilidad: "Reservado", id_sede: 4 },
  { _id: 18, nombre_instu: "Flauta Dulce Yamaha YRS-23", disponibilidad: "Disponible", id_sede: 4 },
  { _id: 19, nombre_instu: "Flauta Traversa Pearl PFP-105E", disponibilidad: "Disponible", id_sede: 4 },
  { _id: 20, nombre_instu: "Metrónomo Digital Korg MA-2", disponibilidad: "Disponible", id_sede: 4 }
]);

// ==================== 8. INSCRIPCIONES ====================
db.inscripciones.insertMany([
  // Inscripciones en Bogotá
  { _id: 1, id_estudiante: 1, id_sede: 1, id_curso: 1, fecha_inscripcion: new Date("2024-09-15") },
  { _id: 2, id_estudiante: 2, id_sede: 1, id_curso: 2, fecha_inscripcion: new Date("2024-09-20") },
  { _id: 3, id_estudiante: 9, id_sede: 1, id_curso: 3, fecha_inscripcion: new Date("2024-10-01") },
  { _id: 4, id_estudiante: 10, id_sede: 1, id_curso: 1, fecha_inscripcion: new Date("2024-10-05") },
  { _id: 5, id_estudiante: 1, id_sede: 1, id_curso: 3, fecha_inscripcion: new Date("2024-10-10") },
  { _id: 6, id_estudiante: 9, id_sede: 1, id_curso: 2, fecha_inscripcion: new Date("2024-10-12") },
  // Inscripciones en Medellín
  { _id: 7, id_estudiante: 3, id_sede: 2, id_curso: 4, fecha_inscripcion: new Date("2024-09-18") },
  { _id: 8, id_estudiante: 4, id_sede: 2, id_curso: 5, fecha_inscripcion: new Date("2024-09-22") },
  { _id: 9, id_estudiante: 11, id_sede: 2, id_curso: 6, fecha_inscripcion: new Date("2024-10-02") },
  { _id: 10, id_estudiante: 12, id_sede: 2, id_curso: 5, fecha_inscripcion: new Date("2024-10-08") },
  { _id: 11, id_estudiante: 3, id_sede: 2, id_curso: 6, fecha_inscripcion: new Date("2024-10-15") },
  { _id: 12, id_estudiante: 11, id_sede: 2, id_curso: 4, fecha_inscripcion: new Date("2024-10-18") },
  { _id: 13, id_estudiante: 4, id_sede: 2, id_curso: 6, fecha_inscripcion: new Date("2024-10-20") },
  // Inscripciones en Cali
  { _id: 14, id_estudiante: 5, id_sede: 3, id_curso: 9, fecha_inscripcion: new Date("2024-09-25") },
  { _id: 15, id_estudiante: 6, id_sede: 3, id_curso: 7, fecha_inscripcion: new Date("2024-09-28") },
  { _id: 16, id_estudiante: 13, id_sede: 3, id_curso: 7, fecha_inscripcion: new Date("2024-10-03") },
  { _id: 17, id_estudiante: 14, id_sede: 3, id_curso: 9, fecha_inscripcion: new Date("2024-10-07") },
  { _id: 18, id_estudiante: 5, id_sede: 3, id_curso: 8, fecha_inscripcion: new Date("2024-10-11") },
  { _id: 19, id_estudiante: 13, id_sede: 3, id_curso: 9, fecha_inscripcion: new Date("2024-10-14") },
  { _id: 20, id_estudiante: 14, id_sede: 3, id_curso: 7, fecha_inscripcion: new Date("2024-10-19") },
  // Inscripciones en Barranquilla
  { _id: 21, id_estudiante: 7, id_sede: 4, id_curso: 11, fecha_inscripcion: new Date("2024-09-30") },
  { _id: 22, id_estudiante: 8, id_sede: 4, id_curso: 10, fecha_inscripcion: new Date("2024-10-04") },
  { _id: 23, id_estudiante: 15, id_sede: 4, id_curso: 12, fecha_inscripcion: new Date("2024-10-06") },
  { _id: 24, id_estudiante: 16, id_sede: 4, id_curso: 11, fecha_inscripcion: new Date("2024-10-09") },
  { _id: 25, id_estudiante: 7, id_sede: 4, id_curso: 10, fecha_inscripcion: new Date("2024-10-13") },
  { _id: 26, id_estudiante: 15, id_sede: 4, id_curso: 10, fecha_inscripcion: new Date("2024-10-16") },
  { _id: 27, id_estudiante: 8, id_sede: 4, id_curso: 12, fecha_inscripcion: new Date("2024-10-21") },
  { _id: 28, id_estudiante: 16, id_sede: 4, id_curso: 12, fecha_inscripcion: new Date("2024-10-22") },
  { _id: 29, id_estudiante: 2, id_sede: 1, id_curso: 1, fecha_inscripcion: new Date("2024-10-23") },
  { _id: 30, id_estudiante: 10, id_sede: 1, id_curso: 2, fecha_inscripcion: new Date("2024-10-25") }
]);

// ==================== 9. RESERVAS DE INSTRUMENTOS ====================
db.reservas_instrumento.insertMany([
  {
    _id: 1,
    id_instrumento: 3,
    id_estudiante: 2,
    fecha_rese: new Date("2024-10-20T14:00:00"),
    fecha_finrese: new Date("2024-10-20T16:00:00")
  },
  {
    _id: 2,
    id_instrumento: 7,
    id_estudiante: 4,
    fecha_rese: new Date("2024-10-21T15:00:00"),
    fecha_finrese: new Date("2024-10-21T17:00:00")
  },
  {
    _id: 3,
    id_instrumento: 11,
    id_estudiante: 5,
    fecha_rese: new Date("2024-10-22T10:00:00"),
    fecha_finrese: new Date("2024-10-22T12:00:00")
  },
  {
    _id: 4,
    id_instrumento: 17,
    id_estudiante: 7,
    fecha_rese: new Date("2024-10-23T18:00:00"),
    fecha_finrese: new Date("2024-10-23T20:00:00")
  },
  {
    _id: 5,
    id_instrumento: 1,
    id_estudiante: 1,
    fecha_rese: new Date("2024-10-24T09:00:00"),
    fecha_finrese: new Date("2024-10-24T11:00:00")
  },
  {
    _id: 6,
    id_instrumento: 6,
    id_estudiante: 3,
    fecha_rese: new Date("2024-10-24T14:00:00"),
    fecha_finrese: new Date("2024-10-24T16:00:00")
  },
  {
    _id: 7,
    id_instrumento: 12,
    id_estudiante: 6,
    fecha_rese: new Date("2024-10-25T11:00:00"),
    fecha_finrese: new Date("2024-10-25T13:00:00")
  },
  {
    _id: 8,
    id_instrumento: 16,
    id_estudiante: 8,
    fecha_rese: new Date("2024-10-25T16:00:00"),
    fecha_finrese: new Date("2024-10-25T18:00:00")
  },
  {
    _id: 9,
    id_instrumento: 2,
    id_estudiante: 9,
    fecha_rese: new Date("2024-10-26T10:00:00"),
    fecha_finrese: new Date("2024-10-26T12:00:00")
  },
  {
    _id: 10,
    id_instrumento: 8,
    id_estudiante: 11,
    fecha_rese: new Date("2024-10-26T13:00:00"),
    fecha_finrese: new Date("2024-10-26T15:00:00")
  },
  {
    _id: 11,
    id_instrumento: 13,
    id_estudiante: 13,
    fecha_rese: new Date("2024-10-27T09:00:00"),
    fecha_finrese: new Date("2024-10-27T11:00:00")
  },
  {
    _id: 12,
    id_instrumento: 18,
    id_estudiante: 15,
    fecha_rese: new Date("2024-10-27T14:00:00"),
    fecha_finrese: new Date("2024-10-27T16:00:00")
  }
]);

/*
// Insert para Sedes
db.Sedes.insertMany([
    {_id: 1, ciudad: "Bogotá", direccion: "Calle 123 #45-67", capacidad: 200, n_estudiantes: 150, cursos_disponibles: 15},
    {_id: 2, ciudad: "Medellín", direccion: "Carrera 80 #25-30", capacidad: 150, n_estudiantes: 120, cursos_disponibles: 12},
    {_id: 3, ciudad: "Cali", direccion: "Avenida 4N #10-25", capacidad: 100, n_estudiantes: 80, cursos_disponibles: 10}
]);

// Insert para Usuarios

db.Usuarios.insertMany([
    {_id: 1, tipo_usuario: "Estudiante", descripcion: "Usuario que toma cursos musicales"},
    {_id: 2, tipo_usuario: "Profesor", descripcion: "Instructor de cursos musicales"},
    {_id: 3, tipo_usuario: "Administrador", descripcion: "Gestor del campus musical"}
]);


// Insert para Instrumentos
db.Instrumentos.insertMany([
    {_id: 1, nombre_instrumento: "Guitarra Acústica", id_sede: 1, disponibilidad: true},
    {_id: 2, nombre_instrumento: "Piano Digital", id_sede: 1, disponibilidad: false},
    {_id: 3, nombre_instrumento: "Violín", id_sede: 1, disponibilidad: true},
    {_id: 4, nombre_instrumento: "Batería", id_sede: 2, disponibilidad: true},
    {_id: 5, nombre_instrumento: "Saxofón", id_sede: 2, disponibilidad: true},
    {_id: 6, nombre_instrumento: "Flauta", id_sede: 3, disponibilidad: false},
    {_id: 7, nombre_instrumento: "Guitarra Eléctrica", id_sede: 3, disponibilidad: true}
]);

// Insert para Cursos
db.Cursos.insertMany([
    {_id: 1, nombre_curso: "Guitarra Principiante", horario: "6:00AM-2:00PM", cupos: 20, duracion: "3 meses", nivel: "basico", id_instrumento: 1},
    {_id: 2, nombre_curso: "Piano Intermedio", horario: "2:00PM-10:00PM", cupos: 15, duracion: "4 meses", nivel: "intermedio", id_instrumento: 2},
    {_id: 3, nombre_curso: "Violín Avanzado", horario: "6:00AM-2:00PM", cupos: 10, duracion: "6 meses", nivel: "avanzado", id_instrumento: 3},
    {_id: 4, nombre_curso: "Batería Básica", horario: "2:00PM-10:00PM", cupos: 12, duracion: "3 meses", nivel: "basico", id_instrumento: 4},
    {_id: 5, nombre_curso: "Saxofón Intermedio", horario: "6:00AM-2:00PM", cupos: 8, duracion: "5 meses", nivel: "intermedio", id_instrumento: 5}
]);

// Insert para Profesores
db.Profesores.insertMany([
    {_id: 1, nombre_pro: "Carlos Rodríguez", especialidad: "Guitarra", cursos_asignados: [1], experiencia: "10 años", id_sede: 1},
    {_id: 2, nombre_pro: "María González", especialidad: "Piano", cursos_asignados: [2], experiencia: "8 años", id_sede: 1},
    {_id: 3, nombre_pro: "Juan Pérez", especialidad: "Violín", cursos_asignados: [3], experiencia: "12 años", id_sede: 1},
    {_id: 4, nombre_pro: "Ana Martínez", especialidad: "Percusión", cursos_asignados: [4], experiencia: "7 años", id_sede: 2},
    {_id: 5, nombre_pro: "Luis Torres", especialidad: "Vientos", cursos_asignados: [5], experiencia: "9 años", id_sede: 2}
]);

// Insert para Estudiantes
db.Estudiantes.insertMany([
    {_id: 1, nombre: "Laura Sánchez", documento: "1001234567", nivel_mu: "basico", contacto: "laura@email.com", id_sede: 1},
    {_id: 2, nombre: "Andrés Ramírez", documento: "1002345678", nivel_mu: "intermedio", contacto: "andres@email.com", id_sede: 1},
    {_id: 3, nombre: "Sofía Mendoza", documento: "1003456789", nivel_mu: "avanzado", contacto: "sofia@email.com", id_sede: 1},
    {_id: 4, nombre: "Diego López", documento: "1004567890", nivel_mu: "basico", contacto: "diego@email.com", id_sede: 2},
    {_id: 5, nombre: "Camila Herrera", documento: "1005678901", nivel_mu: "intermedio", contacto: "camila@email.com", id_sede: 2},
    {_id: 6, nombre: "Miguel Castro", documento: "1006789012", nivel_mu: "basico", contacto: "miguel@email.com", id_sede: 3}
]);

// Insert para Curso_profesor
db.Curso_profesor.insertMany([
    {_id: 1, id_curso: 1, id_profesor: 1, id_sede: 1},
    {_id: 2, id_curso: 2, id_profesor: 2, id_sede: 1},
    {_id: 3, id_curso: 3, id_profesor: 3, id_sede: 1},
    {_id: 4, id_curso: 4, id_profesor: 4, id_sede: 2},
    {_id: 5, id_curso: 5, id_profesor: 5, id_sede: 2}
]);

// Insert para Inscripciones
db.Inscripciones.insertMany([
    {_id: 1, id_estudiante: 1, id_curso: 1, id_sede: 1},
    {_id: 2, id_estudiante: 2, id_curso: 2, id_sede: 1},
    {_id: 3, id_estudiante: 3, id_curso: 3, id_sede: 1},
    {_id: 4, id_estudiante: 4, id_curso: 4, id_sede: 2},
    {_id: 5, id_estudiante: 5, id_curso: 5, id_sede: 2},
    {_id: 6, id_estudiante: 6, id_curso: 1, id_sede: 1}
]);

// Insert para Reservas_instrumento
db.Reservas_instrumento.insertMany([
    {_id: 1, id_instrumento: 1, id_estudiante: 1, fecha_rese: new Date("2024-01-15"), fecha_finrese: new Date("2024-02-15")},
    {_id: 2, id_instrumento: 3, id_estudiante: 3, fecha_rese: new Date("2024-01-20"), fecha_finrese: new Date("2024-03-20")},
    {_id: 3, id_instrumento: 4, id_estudiante: 4, fecha_rese: new Date("2024-02-01"), fecha_finrese: new Date("2024-04-01")},
    {_id: 4, id_instrumento: 5, id_estudiante: 5, fecha_rese: new Date("2024-02-10"), fecha_finrese: new Date("2024-05-10")}
]);

use('Campus_Music');

//  SEDES 
db.Sedes.insertMany([
  { _id: 1, ciudad: "Bogotá", direccion: "Calle 123 #45-67", capacidad: 200, n_estudiantes: 150, cursos_disponibles: 15 },
  { _id: 2, ciudad: "Medellín", direccion: "Carrera 80 #25-30", capacidad: 150, n_estudiantes: 120, cursos_disponibles: 12 },
  { _id: 3, ciudad: "Cali", direccion: "Avenida 4N #10-25", capacidad: 100, n_estudiantes: 80, cursos_disponibles: 10 }
]);

//  INSTRUMENTOS 
db.Instrumentos.insertMany([
  { _id: 1, nombre_instrumento: "Guitarra Acústica", id_sede: 1, disponibilidad: true },
  { _id: 2, nombre_instrumento: "Piano Digital", id_sede: 1, disponibilidad: true },
  { _id: 3, nombre_instrumento: "Violín", id_sede: 1, disponibilidad: true },
  { _id: 4, nombre_instrumento: "Batería", id_sede: 1, disponibilidad: true },
  { _id: 5, nombre_instrumento: "Saxofón", id_sede: 1, disponibilidad: false },
  { _id: 6, nombre_instrumento: "Guitarra Eléctrica", id_sede: 2, disponibilidad: true },
  { _id: 7, nombre_instrumento: "Teclado", id_sede: 2, disponibilidad: true },
  { _id: 8, nombre_instrumento: "Bajo", id_sede: 2, disponibilidad: true },
  { _id: 9, nombre_instrumento: "Trompeta", id_sede: 2, disponibilidad: true },
  { _id: 10, nombre_instrumento: "Flauta", id_sede: 2, disponibilidad: true },
  { _id: 11, nombre_instrumento: "Guitarra Acústica", id_sede: 3, disponibilidad: true },
  { _id: 12, nombre_instrumento: "Piano Digital", id_sede: 3, disponibilidad: true },
  { _id: 13, nombre_instrumento: "Violín", id_sede: 3, disponibilidad: true },
  { _id: 14, nombre_instrumento: "Batería", id_sede: 3, disponibilidad: true },
  { _id: 15, nombre_instrumento: "Saxofón", id_sede: 3, disponibilidad: true },
  { _id: 16, nombre_instrumento: "Clarinete", id_sede: 3, disponibilidad: true },
  { _id: 17, nombre_instrumento: "Ukelele", id_sede: 1, disponibilidad: true },
  { _id: 18, nombre_instrumento: "Oboe", id_sede: 2, disponibilidad: true },
  { _id: 19, nombre_instrumento: "Cello", id_sede: 3, disponibilidad: false },
  { _id: 20, nombre_instrumento: "Arpa", id_sede: 2, disponibilidad: true }
]);

//  CURSOS 
db.Cursos.insertMany([
  // Bogotá
  { _id: 1, nombre_curso: "Guitarra Básico", horario: "6:00AM-2:00PM", cupos: 20, duracion: "3 meses", nivel: "basico", id_instrumento: 1 },
  { _id: 2, nombre_curso: "Piano Intermedio", horario: "2:00PM-10:00PM", cupos: 15, duracion: "4 meses", nivel: "intermedio", id_instrumento: 2 },
  { _id: 3, nombre_curso: "Violín Avanzado", horario: "6:00AM-2:00PM", cupos: 10, duracion: "6 meses", nivel: "avanzado", id_instrumento: 3 },
  { _id: 4, nombre_curso: "Teoría Musical", horario: "2:00PM-10:00PM", cupos: 25, duracion: "2 meses", nivel: "basico", id_instrumento: 4 },
  { _id: 5, nombre_curso: "Canto Avanzado", horario: "6:00AM-2:00PM", cupos: 12, duracion: "3 meses", nivel: "avanzado", id_instrumento: 5 },

  // Medellín
  { _id: 6, nombre_curso: "Guitarra Intermedia", horario: "6:00AM-2:00PM", cupos: 18, duracion: "3 meses", nivel: "intermedio", id_instrumento: 6 },
  { _id: 7, nombre_curso: "Teclado Básico", horario: "2:00PM-10:00PM", cupos: 20, duracion: "4 meses", nivel: "basico", id_instrumento: 7 },
  { _id: 8, nombre_curso: "Bajo Avanzado", horario: "6:00AM-2:00PM", cupos: 12, duracion: "5 meses", nivel: "avanzado", id_instrumento: 8 },
  { _id: 9, nombre_curso: "Trompeta Básico", horario: "2:00PM-10:00PM", cupos: 10, duracion: "2 meses", nivel: "basico", id_instrumento: 9 },
  { _id: 10, nombre_curso: "Flauta Intermedio", horario: "6:00AM-2:00PM", cupos: 15, duracion: "3 meses", nivel: "intermedio", id_instrumento: 10 },

  // Cali
  { _id: 11, nombre_curso: "Piano Avanzado", horario: "6:00AM-2:00PM", cupos: 10, duracion: "4 meses", nivel: "avanzado", id_instrumento: 12 },
  { _id: 12, nombre_curso: "Violín Básico", horario: "2:00PM-10:00PM", cupos: 20, duracion: "3 meses", nivel: "basico", id_instrumento: 13 },
  { _id: 13, nombre_curso: "Saxofón Intermedio", horario: "6:00AM-2:00PM", cupos: 15, duracion: "4 meses", nivel: "intermedio", id_instrumento: 15 },
  { _id: 14, nombre_curso: "Percusión Básica", horario: "2:00PM-10:00PM", cupos: 25, duracion: "2 meses", nivel: "basico", id_instrumento: 14 },
  { _id: 15, nombre_curso: "Clarinete Avanzado", horario: "6:00AM-2:00PM", cupos: 8, duracion: "6 meses", nivel: "avanzado", id_instrumento: 16 }
]);

//  PROFESORES 
db.Profesores.insertMany([
  { _id: 1, nombre_pro: "Carlos Rodríguez", especialidad: "Guitarra", cursos_asignados: [1, 6], experiencia: "10 años", id_sede: 1 },
  { _id: 2, nombre_pro: "María González", especialidad: "Piano", cursos_asignados: [2, 11], experiencia: "8 años", id_sede: 1 },
  { _id: 3, nombre_pro: "Juan Pérez", especialidad: "Violín", cursos_asignados: [3, 12], experiencia: "12 años", id_sede: 1 },
  { _id: 4, nombre_pro: "Ana Martínez", especialidad: "Teoría Musical", cursos_asignados: [4], experiencia: "7 años", id_sede: 1 },
  { _id: 5, nombre_pro: "Laura Gómez", especialidad: "Canto", cursos_asignados: [5], experiencia: "6 años", id_sede: 1 },
  { _id: 6, nombre_pro: "Luis Torres", especialidad: "Bajo", cursos_asignados: [8], experiencia: "9 años", id_sede: 2 },
  { _id: 7, nombre_pro: "Santiago Ramírez", especialidad: "Vientos", cursos_asignados: [9, 10, 13], experiencia: "11 años", id_sede: 2 },
  { _id: 8, nombre_pro: "Valentina Ruiz", especialidad: "Percusión", cursos_asignados: [14], experiencia: "5 años", id_sede: 3 },
  { _id: 9, nombre_pro: "Ricardo Torres", especialidad: "Clarinete", cursos_asignados: [15], experiencia: "13 años", id_sede: 3 },
  { _id: 10, nombre_pro: "Camilo Ortiz", especialidad: "Saxofón", cursos_asignados: [13], experiencia: "10 años", id_sede: 3 }
]);

//  ESTUDIANTES 
db.Estudiantes.insertMany([
  { _id: 1, nombre: "Laura Sánchez", documento: "1001", nivel_mu: "basico", contacto: "laura@email.com", id_sede: 1 },
  { _id: 2, nombre: "Andrés Ramírez", documento: "1002", nivel_mu: "intermedio", contacto: "andres@email.com", id_sede: 1 },
  { _id: 3, nombre: "Sofía Mendoza", documento: "1003", nivel_mu: "avanzado", contacto: "sofia@email.com", id_sede: 1 },
  { _id: 4, nombre: "Diego López", documento: "1004", nivel_mu: "basico", contacto: "diego@email.com", id_sede: 1 },
  { _id: 5, nombre: "Camila Herrera", documento: "1005", nivel_mu: "intermedio", contacto: "camila@email.com", id_sede: 1 },
  { _id: 6, nombre: "Miguel Castro", documento: "1006", nivel_mu: "basico", contacto: "miguel@email.com", id_sede: 2 },
  { _id: 7, nombre: "Daniel Ruiz", documento: "1007", nivel_mu: "intermedio", contacto: "daniel@email.com", id_sede: 2 },
  { _id: 8, nombre: "Valeria Morales", documento: "1008", nivel_mu: "avanzado", contacto: "valeria@email.com", id_sede: 2 },
  { _id: 9, nombre: "Julián Torres", documento: "1009", nivel_mu: "basico", contacto: "julian@email.com", id_sede: 2 },
  { _id: 10, nombre: "Esteban Gutiérrez", documento: "1010", nivel_mu: "intermedio", contacto: "esteban@email.com", id_sede: 2 },
  { _id: 11, nombre: "Sara Romero", documento: "1011", nivel_mu: "basico", contacto: "sara@email.com", id_sede: 3 },
  { _id: 12, nombre: "Tomás Arias", documento: "1012", nivel_mu: "intermedio", contacto: "tomas@email.com", id_sede: 3 },
  { _id: 13, nombre: "Valentina Silva", documento: "1013", nivel_mu: "avanzado", contacto: "valentina@email.com", id_sede: 3 },
  { _id: 14, nombre: "Felipe Andrade", documento: "1014", nivel_mu: "basico", contacto: "felipe@email.com", id_sede: 3 },
  { _id: 15, nombre: "Isabella Montoya", documento: "1015", nivel_mu: "intermedio", contacto: "isa@email.com", id_sede: 3 }
]);

//  INSCRIPCIONES 
db.Inscripciones.insertMany([
  { _id: 1, id_estudiante: 1, id_curso: 1, id_sede: 1, fecha_inscripcion: new Date("2024-01-05") },
  { _id: 2, id_estudiante: 2, id_curso: 2, id_sede: 1, fecha_inscripcion: new Date("2024-01-08") },
  { _id: 3, id_estudiante: 3, id_curso: 3, id_sede: 1, fecha_inscripcion: new Date("2024-01-10") },
  { _id: 4, id_estudiante: 4, id_curso: 4, id_sede: 1, fecha_inscripcion: new Date("2024-01-15") },
  { _id: 5, id_estudiante: 5, id_curso: 5, id_sede: 1, fecha_inscripcion: new Date("2024-01-20") },
  { _id: 6, id_estudiante: 6, id_curso: 6, id_sede: 2, fecha_inscripcion: new Date("2024-02-01") },
  { _id: 7, id_estudiante: 7, id_curso: 7, id_sede: 2, fecha_inscripcion: new Date("2024-02-03") },
  { _id: 8, id_estudiante: 8, id_curso: 8, id_sede: 2, fecha_inscripcion: new Date("2024-02-06") },
  { _id: 9, id_estudiante: 9, id_curso: 9, id_sede: 2, fecha_inscripcion: new Date("2024-02-10") },
  { _id: 10, id_estudiante: 10, id_curso: 10, id_sede: 2, fecha_inscripcion: new Date("2024-02-15") },
  { _id: 11, id_estudiante: 11, id_curso: 11, id_sede: 3, fecha_inscripcion: new Date("2024-03-01") },
  { _id: 12, id_estudiante: 12, id_curso: 12, id_sede: 3, fecha_inscripcion: new Date("2024-03-03") },
  { _id: 13, id_estudiante: 13, id_curso: 13, id_sede: 3, fecha_inscripcion: new Date("2024-03-07") },
  { _id: 14, id_estudiante: 14, id_curso: 14, id_sede: 3, fecha_inscripcion: new Date("2024-03-10") },
  { _id: 15, id_estudiante: 15, id_curso: 15, id_sede: 3, fecha_inscripcion: new Date("2024-03-15") },

  // duplicados variados
  { _id: 16, id_estudiante: 1, id_curso: 2, id_sede: 1, fecha_inscripcion: new Date("2024-04-01") },
  { _id: 17, id_estudiante: 2, id_curso: 1, id_sede: 1, fecha_inscripcion: new Date("2024-04-03") },
  { _id: 18, id_estudiante: 3, id_curso: 4, id_sede: 1, fecha_inscripcion: new Date("2024-04-05") },
  { _id: 19, id_estudiante: 4, id_curso: 5, id_sede: 1, fecha_inscripcion: new Date("2024-04-07") },
  { _id: 20, id_estudiante: 5, id_curso: 3, id_sede: 1, fecha_inscripcion: new Date("2024-04-10") },
  { _id: 21, id_estudiante: 6, id_curso: 7, id_sede: 2, fecha_inscripcion: new Date("2024-04-12") },
  { _id: 22, id_estudiante: 7, id_curso: 8, id_sede: 2, fecha_inscripcion: new Date("2024-04-15") },
  { _id: 23, id_estudiante: 8, id_curso: 10, id_sede: 2, fecha_inscripcion: new Date("2024-04-20") },
  { _id: 24, id_estudiante: 9, id_curso: 6, id_sede: 2, fecha_inscripcion: new Date("2024-05-01") },
  { _id: 25, id_estudiante: 10, id_curso: 9, id_sede: 2, fecha_inscripcion: new Date("2024-05-05") },
  { _id: 26, id_estudiante: 11, id_curso: 13, id_sede: 3, fecha_inscripcion: new Date("2024-05-10") },
  { _id: 27, id_estudiante: 12, id_curso: 14, id_sede: 3, fecha_inscripcion: new Date("2024-05-15") },
  { _id: 28, id_estudiante: 13, id_curso: 15, id_sede: 3, fecha_inscripcion: new Date("2024-05-18") },
  { _id: 29, id_estudiante: 14, id_curso: 11, id_sede: 3, fecha_inscripcion: new Date("2024-05-20") },
  { _id: 30, id_estudiante: 15, id_curso: 12, id_sede: 3, fecha_inscripcion: new Date("2024-05-25") }
]);




db.Curso_profesor.insertMany([
    // Bogotá
    { _id: 1, id_curso: 1, id_profesor: 1, id_sede: 1 },
    { _id: 2, id_curso: 2, id_profesor: 2, id_sede: 1 },
    { _id: 3, id_curso: 3, id_profesor: 3, id_sede: 1 },
    { _id: 4, id_curso: 4, id_profesor: 4, id_sede: 1 },
    { _id: 5, id_curso: 5, id_profesor: 5, id_sede: 1 },

    // Medellín
    { _id: 6, id_curso: 6, id_profesor: 6, id_sede: 2 },
    { _id: 7, id_curso: 7, id_profesor: 7, id_sede: 2 },
    { _id: 8, id_curso: 8, id_profesor: 8, id_sede: 2 },
    { _id: 9, id_curso: 9, id_profesor: 9, id_sede: 2 },
    { _id: 10, id_curso: 10, id_profesor: 10, id_sede: 2 },

    // Cali
    { _id: 11, id_curso: 11, id_profesor: 1, id_sede: 3 },
    { _id: 12, id_curso: 12, id_profesor: 3, id_sede: 3 },
    { _id: 13, id_curso: 13, id_profesor: 6, id_sede: 3 },
    { _id: 14, id_curso: 14, id_profesor: 8, id_sede: 3 },
    { _id: 15, id_curso: 15, id_profesor: 9, id_sede: 3 }
]);

// RESERVAS 
db.Reservas_instrumento.insertMany([
    { _id: 1, id_instrumento: 1, id_estudiante: 1, fecha_rese: new Date("2024-01-15"), fecha_finrese: new Date("2024-02-15") },
    { _id: 2, id_instrumento: 2, id_estudiante: 2, fecha_rese: new Date("2024-01-20"), fecha_finrese: new Date("2024-02-20") },
    { _id: 3, id_instrumento: 3, id_estudiante: 3, fecha_rese: new Date("2024-02-01"), fecha_finrese: new Date("2024-03-01") },
    { _id: 4, id_instrumento: 4, id_estudiante: 4, fecha_rese: new Date("2024-02-10"), fecha_finrese: new Date("2024-03-10") },
    { _id: 5, id_instrumento: 5, id_estudiante: 5, fecha_rese: new Date("2024-03-01"), fecha_finrese: new Date("2024-04-01") },
    { _id: 6, id_instrumento: 6, id_estudiante: 6, fecha_rese: new Date("2024-03-15"), fecha_finrese: new Date("2024-04-15") },
    { _id: 7, id_instrumento: 7, id_estudiante: 7, fecha_rese: new Date("2024-04-01"), fecha_finrese: new Date("2024-05-01") },
    { _id: 8, id_instrumento: 8, id_estudiante: 8, fecha_rese: new Date("2024-04-20"), fecha_finrese: new Date("2024-05-20") },
    { _id: 9, id_instrumento: 9, id_estudiante: 9, fecha_rese: new Date("2024-05-05"), fecha_finrese: new Date("2024-06-05") },
    { _id: 10, id_instrumento: 10, id_estudiante: 10, fecha_rese: new Date("2024-05-25"), fecha_finrese: new Date("2024-06-25") }
]);
*/
