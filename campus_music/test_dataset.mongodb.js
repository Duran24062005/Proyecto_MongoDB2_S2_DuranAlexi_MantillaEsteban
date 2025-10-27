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