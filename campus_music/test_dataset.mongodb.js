
use('Campus_Music');


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
  { _id: 1, id_estudiante: 1, id_curso: 1, id_sede: 1 },
  { _id: 2, id_estudiante: 2, id_curso: 2, id_sede: 1 },
  { _id: 3, id_estudiante: 3, id_curso: 3, id_sede: 1 },
  { _id: 4, id_estudiante: 4, id_curso: 4, id_sede: 1 },
  { _id: 5, id_estudiante: 5, id_curso: 5, id_sede: 1 },
  { _id: 6, id_estudiante: 6, id_curso: 6, id_sede: 2 },
  { _id: 7, id_estudiante: 7, id_curso: 7, id_sede: 2 },
  { _id: 8, id_estudiante: 8, id_curso: 8, id_sede: 2 },
  { _id: 9, id_estudiante: 9, id_curso: 9, id_sede: 2 },
  { _id: 10, id_estudiante: 10, id_curso: 10, id_sede: 2 },
  { _id: 11, id_estudiante: 11, id_curso: 11, id_sede: 3 },
  { _id: 12, id_estudiante: 12, id_curso: 12, id_sede: 3 },
  { _id: 13, id_estudiante: 13, id_curso: 13, id_sede: 3 },
  { _id: 14, id_estudiante: 14, id_curso: 14, id_sede: 3 },
  { _id: 15, id_estudiante: 15, id_curso: 15, id_sede: 3 },
  // duplicados variados
  { _id: 16, id_estudiante: 1, id_curso: 2, id_sede: 1 },
  { _id: 17, id_estudiante: 2, id_curso: 1, id_sede: 1 },
  { _id: 18, id_estudiante: 3, id_curso: 4, id_sede: 1 },
  { _id: 19, id_estudiante: 4, id_curso: 5, id_sede: 1 },
  { _id: 20, id_estudiante: 5, id_curso: 3, id_sede: 1 },
  { _id: 21, id_estudiante: 6, id_curso: 7, id_sede: 2 },
  { _id: 22, id_estudiante: 7, id_curso: 8, id_sede: 2 },
  { _id: 23, id_estudiante: 8, id_curso: 10, id_sede: 2 },
  { _id: 24, id_estudiante: 9, id_curso: 6, id_sede: 2 },
  { _id: 25, id_estudiante: 10, id_curso: 9, id_sede: 2 },
  { _id: 26, id_estudiante: 11, id_curso: 13, id_sede: 3 },
  { _id: 27, id_estudiante: 12, id_curso: 14, id_sede: 3 },
  { _id: 28, id_estudiante: 13, id_curso: 15, id_sede: 3 },
  { _id: 29, id_estudiante: 14, id_curso: 11, id_sede: 3 },
  { _id: 30, id_estudiante: 15, id_curso: 12, id_sede: 3 }
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

