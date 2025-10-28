// ==================== DEFINICIÓN DE ROLES Y PERMISOS ====================
// Archivo: roles.js
// Descripción: Creación de roles con permisos específicos para el sistema musical

// Conectar a la base de datos
use('Campus_Music');


// ======================================
// CREACIÓN DE ROLES DE SEGURIDAD
// ========================================

// ==================== 1. ROL: ADMINISTRADOR ====================
// 1. Creando rol: Administrador
//    - Acceso total a todas las colecciones
//    - Puede crear, leer, actualizar y eliminar cualquier dato

db.createRole({
  role: "administrador_sistema",
  privileges: [
    {
      resource: { db: "sistema_musical", collection: "" },
      actions: [
        "find",
        "insert",
        "update",
        "remove",
        "createCollection",
        "dropCollection",
        "createIndex",
        "dropIndex",
        "listIndexes",
        "collStats",
        "dbStats"
      ]
    }
  ],
  roles: []
});


// ==================== 2. ROL: EMPLEADO DE SEDE ====================
// 2. Creando rol: Empleado de Sede
//    - Acceso limitado a información de su sede
//    - Puede registrar inscripciones y reservas
//    - No puede ver información de otras sedes

db.createRole({
  role: "empleado_sede",
  privileges: [
    // Lectura de estudiantes (filtrará por sede en la aplicación)
    {
      resource: { db: "sistema_musical", collection: "estudiantes" },
      actions: ["find"]
    },
    // Lectura de profesores (filtrará por sede en la aplicación)
    {
      resource: { db: "sistema_musical", collection: "profesores" },
      actions: ["find"]
    },
    // Lectura de cursos (filtrará por sede en la aplicación)
    {
      resource: { db: "sistema_musical", collection: "cursos" },
      actions: ["find"]
    },
    // Lectura de su sede específica
    {
      resource: { db: "sistema_musical", collection: "sedes" },
      actions: ["find"]
    },
    // Lectura de instrumentos de su sede
    {
      resource: { db: "sistema_musical", collection: "instrumentos" },
      actions: ["find", "update"]
    },
    // Gestión completa de inscripciones
    {
      resource: { db: "sistema_musical", collection: "inscripciones" },
      actions: ["find", "insert", "update"]
    },
    // Gestión completa de reservas
    {
      resource: { db: "sistema_musical", collection: "reservas_instrumento" },
      actions: ["find", "insert", "update", "remove"]
    },
    // Lectura de usuarios (para validaciones)
    {
      resource: { db: "sistema_musical", collection: "usuarios" },
      actions: ["find"]
    },
    // Lectura de roles
    {
      resource: { db: "sistema_musical", collection: "roles" },
      actions: ["find"]
    }
  ],
  roles: []
});


// ==================== 3. ROL: PROFESOR ====================
// 3. Creando rol: Profesor
//    - Acceso a sus cursos asignados
//    - Puede ver estudiantes inscritos en sus cursos
//    - Puede consultar información de su sede

db.createRole({
  role: "profesor_sistema",
  privileges: [
    // Lectura de su propia información
    {
      resource: { db: "sistema_musical", collection: "profesores" },
      actions: ["find"]
    },
    // Lectura de sus cursos
    {
      resource: { db: "sistema_musical", collection: "cursos" },
      actions: ["find"]
    },
    // Lectura de inscripciones (para ver sus estudiantes)
    {
      resource: { db: "sistema_musical", collection: "inscripciones" },
      actions: ["find"]
    },
    // Lectura de estudiantes
    {
      resource: { db: "sistema_musical", collection: "estudiantes" },
      actions: ["find"]
    },
    // Lectura de usuarios
    {
      resource: { db: "sistema_musical", collection: "usuarios" },
      actions: ["find"]
    },
    // Lectura de su sede
    {
      resource: { db: "sistema_musical", collection: "sedes" },
      actions: ["find"]
    },
    // Lectura de instrumentos
    {
      resource: { db: "sistema_musical", collection: "instrumentos" },
      actions: ["find"]
    }
  ],
  roles: []
});


// ==================== 4. ROL: ESTUDIANTE ====================
// 4. Creando rol: Estudiante
//    - Acceso a su propia información
//    - Consulta de cursos disponibles
//    - Consulta de su historial de inscripciones
//    - Puede reservar instrumentos

db.createRole({
  role: "estudiante_sistema",
  privileges: [
    // Lectura de su propia información de estudiante
    {
      resource: { db: "sistema_musical", collection: "estudiantes" },
      actions: ["find"]
    },
    // Lectura de su información de usuario
    {
      resource: { db: "sistema_musical", collection: "usuarios" },
      actions: ["find", "update"] // update para actualizar su perfil
    },
    // Lectura de todos los cursos disponibles
    {
      resource: { db: "sistema_musical", collection: "cursos" },
      actions: ["find"]
    },
    // Lectura de sedes para consultar información
    {
      resource: { db: "sistema_musical", collection: "sedes" },
      actions: ["find"]
    },
    // Lectura de profesores (información pública)
    {
      resource: { db: "sistema_musical", collection: "profesores" },
      actions: ["find"]
    },
    // Consulta de sus inscripciones
    {
      resource: { db: "sistema_musical", collection: "inscripciones" },
      actions: ["find"]
    },
    // Gestión de reservas de instrumentos
    {
      resource: { db: "sistema_musical", collection: "reservas_instrumento" },
      actions: ["find", "insert", "remove"] // Puede crear y cancelar sus reservas
    },
    // Lectura de instrumentos disponibles
    {
      resource: { db: "sistema_musical", collection: "instrumentos" },
      actions: ["find"]
    }
  ],
  roles: []
});


// ==================== CREAR USUARIOS DE EJEMPLO ====================

// 1. USUARIO ADMINISTRADOR
db.createUser({
  user: "admin_carlos",
  pwd: "Admin123!Seguro",
  roles: [
    { role: "administrador_sistema", db: "sistema_musical" }
  ],
  customData: {
    nombre_completo: "Carlos Méndez",
    tipo_usuario: "Administrador",
    email: "carlos.mendez@campusmusic.com"
  }
});

// 2. USUARIO EMPLEADO DE SEDE - BOGOTÁ
db.createUser({
  user: "empleado_andrea",
  pwd: "Empleado123!Bogota",
  roles: [
    { role: "empleado_sede", db: "sistema_musical" }
  ],
  customData: {
    nombre_completo: "Andrea Torres",
    tipo_usuario: "Empleado Sede",
    email: "andrea.torres@campusmusic.com",
    sede_id: 1, // Bogotá
    sede_nombre: "Bogotá"
  }
});

// 3. USUARIO EMPLEADO DE SEDE - MEDELLÍN
db.createUser({
  user: "empleado_miguel",
  pwd: "Empleado123!Medellin",
  roles: [
    { role: "empleado_sede", db: "sistema_musical" }
  ],
  customData: {
    nombre_completo: "Miguel Ángel Rojas",
    tipo_usuario: "Empleado Sede",
    email: "miguel.rojas@campusmusic.com",
    sede_id: 2, // Medellín
    sede_nombre: "Medellín"
  }
});

// 4. USUARIO PROFESOR
db.createUser({
  user: "prof_sofia",
  pwd: "Profesor123!Piano",
  roles: [
    { role: "profesor_sistema", db: "sistema_musical" }
  ],
  customData: {
    nombre_completo: "Sofía Martínez",
    tipo_usuario: "Profesor",
    email: "sofia.martinez@campusmusic.com",
    profesor_id: 1,
    especialidad: "Piano",
    sede_id: 1
  }
});

// 5. USUARIO PROFESOR
db.createUser({
  user: "prof_ricardo",
  pwd: "Profesor123!Guitarra",
  roles: [
    { role: "profesor_sistema", db: "sistema_musical" }
  ],
  customData: {
    nombre_completo: "Ricardo Gómez",
    tipo_usuario: "Profesor",
    email: "ricardo.gomez@campusmusic.com",
    profesor_id: 2,
    especialidad: "Guitarra",
    sede_id: 2
  }
});

// 6. USUARIO ESTUDIANTE
db.createUser({
  user: "est_maria",
  pwd: "Estudiante123!",
  roles: [
    { role: "estudiante_sistema", db: "sistema_musical" }
  ],
  customData: {
    nombre_completo: "María Fernanda Díaz",
    tipo_usuario: "Estudiante",
    email: "maria.diaz@estudiante.com",
    estudiante_id: 1,
    nivel_musical: "Principiante",
    sede_id: 1
  }
});

// 7. USUARIO ESTUDIANTE
db.createUser({
  user: "est_daniel",
  pwd: "Estudiante123!",
  roles: [
    { role: "estudiante_sistema", db: "sistema_musical" }
  ],
  customData: {
    nombre_completo: "Daniel Santiago Pérez",
    tipo_usuario: "Estudiante",
    email: "daniel.perez@estudiante.com",
    estudiante_id: 2,
    nivel_musical: "Intermedio",
    sede_id: 1
  }
});

// 8. USUARIO ESTUDIANTE
print("8. Creando usuario Estudiante...");
db.createUser({
  user: "est_isabella",
  pwd: "Estudiante123!",
  roles: [
    { role: "estudiante_sistema", db: "sistema_musical" }
  ],
  customData: {
    nombre_completo: "Isabella García",
    tipo_usuario: "Estudiante",
    email: "isabella.garcia@estudiante.com",
    estudiante_id: 3,
    nivel_musical: "Principiante",
    sede_id: 2
  }
});


db.getRoles({ showBuiltinRoles: false });

db.getUsers();


// mongosh -u "editor_user" -p "12345" --authenticationDatabase "mi_app"