use('Campus_Music');

// creacion de colecciones 

// ==================== COLECCIÓN: roles ====================
db.createCollection("roles", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre"],
      properties: {
        _id: {
          bsonType: "int",
          description: "ID único del rol - requerido"
        },
        nombre: {
          bsonType: "string",
          minLength: 1,
          maxLength: 50,
          description: "Nombre del rol (ej: Administrador, Estudiante, Profesor) - requerido"
        }
      }
    }
  }
});

// Índices para roles
db.roles.createIndex({ nombre: 1 }, { unique: true });

// ==================== COLECCIÓN: usuarios ====================
db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre_usuario", "documento", "email", "rol_id"],
      properties: {
        _id: {
          bsonType: "int",
          description: "ID único del usuario - requerido"
        },
        nombre_usuario: {
          bsonType: "string",
          minLength: 2,
          maxLength: 100,
          description: "Nombre completo del usuario - requerido"
        },
        documento: {
          bsonType: "string",
          pattern: "^[0-9]+$",
          minLength: 6,
          maxLength: 20,
          description: "Número de documento de identidad - requerido"
        },
        contacto: {
          bsonType: ["string", "null"],
          pattern: "^[0-9+\\-\\s()]*$",
          maxLength: 20,
          description: "Teléfono de contacto"
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
          maxLength: 100,
          description: "Correo electrónico - requerido"
        },
        direccion: {
          bsonType: ["string", "null"],
          maxLength: 200,
          description: "Dirección física del usuario"
        },
        rol_id: {
          bsonType: "int",
          description: "ID del rol asignado - requerido"
        }
      }
    }
  }
});

// Índices para usuarios
db.usuarios.createIndex({ documento: 1 }, { unique: true });
db.usuarios.createIndex({ email: 1 }, { unique: true });
db.usuarios.createIndex({ rol_id: 1 });
db.usuarios.createIndex({ nombre_usuario: 1 });

// ==================== COLECCIÓN: sedes ====================
db.createCollection("sedes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "ciudad", "direccion", "capacidad"],
      properties: {
        _id: {
          bsonType: "int",
          description: "ID único de la sede - requerido"
        },
        ciudad: {
          bsonType: "string",
          minLength: 2,
          maxLength: 100,
          description: "Ciudad donde se ubica la sede - requerido"
        },
        direccion: {
          bsonType: "string",
          minLength: 5,
          maxLength: 200,
          description: "Dirección física de la sede - requerido"
        },
        capacidad: {
          bsonType: "int",
          minimum: 1,
          description: "Capacidad total de estudiantes - requerido"
        },
        cursos_disponibles: {
          bsonType: ["int", "null"],
          minimum: 0,
          description: "Número de cursos activos"
        },
        n_estudiantes: {
          bsonType: ["int", "null"],
          minimum: 0,
          description: "Número actual de estudiantes"
        }
      }
    }
  }
});

// Índices para sedes
db.sedes.createIndex({ ciudad: 1 });
db.sedes.createIndex({ capacidad: 1 });
db.sedes.createIndex({ n_estudiantes: 1 });

// ==================== COLECCIÓN: estudiantes ====================
db.createCollection("estudiantes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "usuario_id", "id_sede"],
      properties: {
        _id: {
          bsonType: "int",
          description: "ID único del estudiante - requerido"
        },
        usuario_id: {
          bsonType: "int",
          description: "ID del usuario asociado - requerido"
        },
        id_sede: {
          bsonType: "int",
          description: "ID de la sede donde estudia - requerido"
        },
        nivel_musical: {
          bsonType: ["string", "null"],
          enum: ["Principiante", "Intermedio", "Avanzado", "Profesional", null],
          description: "Nivel de experiencia musical"
        }
      }
    }
  }
});

// Índices para estudiantes
db.estudiantes.createIndex({ usuario_id: 1 }, { unique: true });
db.estudiantes.createIndex({ id_sede: 1 });
db.estudiantes.createIndex({ nivel_musical: 1 });
db.estudiantes.createIndex({ id_sede: 1, nivel_musical: 1 });

// ==================== COLECCIÓN: profesores ====================
db.createCollection("profesores", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "usuario_id", "id_sede"],
      properties: {
        _id: {
          bsonType: "int",
          description: "ID único del profesor - requerido"
        },
        usuario_id: {
          bsonType: "int",
          description: "ID del usuario asociado - requerido"
        },
        especialidad: {
          bsonType: ["string", "null"],
          maxLength: 100,
          description: "Especialidad o instrumento principal"
        },
        experiencia: {
          bsonType: ["int", "null"],
          minimum: 0,
          description: "Años de experiencia"
        },
        id_sede: {
          bsonType: "int",
          description: "ID de la sede donde trabaja - requerido"
        }
      }
    }
  }
});

// Índices para profesores
db.profesores.createIndex({ usuario_id: 1 }, { unique: true });
db.profesores.createIndex({ id_sede: 1 });
db.profesores.createIndex({ especialidad: 1 });
db.profesores.createIndex({ id_sede: 1, especialidad: 1 });

// ==================== COLECCIÓN: cursos ====================
db.createCollection("cursos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre_curso", "instrumento", "sede_id", "profesor_id"],
      properties: {
        _id: {
          bsonType: "int",
          description: "ID único del curso - requerido"
        },
        nombre_curso: {
          bsonType: "string",
          minLength: 3,
          maxLength: 150,
          description: "Nombre descriptivo del curso - requerido"
        },
        instrumento: {
          bsonType: "string",
          minLength: 2,
          maxLength: 50,
          description: "Instrumento que se enseña - requerido"
        },
        horario: {
          bsonType: ["string", "null"],
          maxLength: 100,
          description: "Horario del curso (ej: Lunes y Miércoles 3-5pm)"
        },
        cupos: {
          bsonType: ["int", "null"],
          minimum: 1,
          description: "Número máximo de estudiantes"
        },
        duracion: {
          bsonType: ["int", "null"],
          minimum: 1,
          description: "Duración en meses"
        },
        nivel: {
          bsonType: ["string", "null"],
          enum: ["Principiante", "Intermedio", "Avanzado", "Profesional", null],
          description: "Nivel requerido"
        },
        sede_id: {
          bsonType: "int",
          description: "ID de la sede donde se imparte - requerido"
        },
        profesor_id: {
          bsonType: "int",
          description: "ID del profesor que imparte el curso - requerido"
        }
      }
    }
  }
});

// Índices para cursos
db.cursos.createIndex({ sede_id: 1 });
db.cursos.createIndex({ profesor_id: 1 });
db.cursos.createIndex({ instrumento: 1 });
db.cursos.createIndex({ nivel: 1 });
db.cursos.createIndex({ sede_id: 1, instrumento: 1 });
db.cursos.createIndex({ sede_id: 1, nivel: 1 });
db.cursos.createIndex({ instrumento: 1, nivel: 1 });

// ==================== COLECCIÓN: instrumentos ====================
db.createCollection("instrumentos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre_instu", "disponibilidad", "id_sede"],
      properties: {
        _id: {
          bsonType: "int",
          description: "ID único del instrumento - requerido"
        },
        nombre_instu: {
          bsonType: "string",
          minLength: 2,
          maxLength: 100,
          description: "Nombre del instrumento - requerido"
        },
        disponibilidad: {
          bsonType: "string",
          enum: ["Disponible", "Reservado", "En mantenimiento", "Fuera de servicio"],
          description: "Estado actual del instrumento - requerido"
        },
        id_sede: {
          bsonType: "int",
          description: "ID de la sede donde se encuentra - requerido"
        }
      }
    }
  }
});

// Índices para instrumentos
db.instrumentos.createIndex({ id_sede: 1 });
db.instrumentos.createIndex({ disponibilidad: 1 });
db.instrumentos.createIndex({ nombre_instu: 1 });
db.instrumentos.createIndex({ id_sede: 1, disponibilidad: 1 });
db.instrumentos.createIndex({ id_sede: 1, nombre_instu: 1 });

// ==================== COLECCIÓN: inscripciones ====================
db.createCollection("inscripciones", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "id_estudiante", "id_sede", "id_curso", "fecha_inscripcion"],
      properties: {
        _id: {
          bsonType: "int",
          description: "ID único de la inscripción - requerido"
        },
        id_estudiante: {
          bsonType: "int",
          description: "ID del estudiante inscrito - requerido"
        },
        id_sede: {
          bsonType: "int",
          description: "ID de la sede - requerido"
        },
        id_curso: {
          bsonType: "int",
          description: "ID del curso - requerido"
        },
        fecha_inscripcion: {
          bsonType: "date",
          description: "Fecha de la inscripción - requerido"
        }
      }
    }
  }
});

// Índices para inscripciones
db.inscripciones.createIndex({ id_estudiante: 1 });
db.inscripciones.createIndex({ id_curso: 1 });
db.inscripciones.createIndex({ id_sede: 1 });
db.inscripciones.createIndex({ fecha_inscripcion: -1 });
db.inscripciones.createIndex({ id_estudiante: 1, id_curso: 1 }, { unique: true });
db.inscripciones.createIndex({ id_curso: 1, fecha_inscripcion: -1 });
db.inscripciones.createIndex({ id_sede: 1, fecha_inscripcion: -1 });

// ==================== COLECCIÓN: reservas_instrumento ====================
db.createCollection("reservas_instrumento", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "id_instrumento", "id_estudiante", "fecha_rese", "fecha_finrese"],
      properties: {
        _id: {
          bsonType: "int",
          description: "ID único de la reserva - requerido"
        },
        id_instrumento: {
          bsonType: "int",
          description: "ID del instrumento reservado - requerido"
        },
        id_estudiante: {
          bsonType: "int",
          description: "ID del estudiante que reserva - requerido"
        },
        fecha_rese: {
          bsonType: "date",
          description: "Fecha de inicio de la reserva - requerido"
        },
        fecha_finrese: {
          bsonType: "date",
          description: "Fecha de fin de la reserva - requerido"
        }
      }
    }
  }
});

// Índices para reservas_instrumento
db.reservas_instrumento.createIndex({ id_instrumento: 1 });
db.reservas_instrumento.createIndex({ id_estudiante: 1 });
db.reservas_instrumento.createIndex({ fecha_rese: 1 });
db.reservas_instrumento.createIndex({ fecha_finrese: 1 });
db.reservas_instrumento.createIndex({ id_instrumento: 1, fecha_rese: 1, fecha_finrese: 1 });
db.reservas_instrumento.createIndex({ id_estudiante: 1, fecha_rese: -1 });
db.reservas_instrumento.createIndex({ fecha_rese: 1, fecha_finrese: 1 });

// ==================== CONSULTAS DE EJEMPLO ====================

// Verificar índices creados
db.usuarios.getIndexes();
db.cursos.getIndexes();

// Consulta optimizada: Buscar cursos disponibles por sede e instrumento
db.cursos.find({ 
  sede_id: 1, 
  instrumento: "Piano" 
}).explain("executionStats");

// Consulta optimizada: Estudiantes por sede y nivel
db.estudiantes.find({ 
  id_sede: 1, 
  nivel_musical: "Intermedio" 
}).explain("executionStats");

// Consulta optimizada: Instrumentos disponibles en una sede
db.instrumentos.find({ 
  id_sede: 1, 
  disponibilidad: "Disponible" 
}).explain("executionStats");




// coleccion estudiantes 
/*db.createCollection("Estudiantes",{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required:["_id","nombre","documento","nivel_mu","contacto","id_sede"],
            properties:{
                _id:{bsonType:"int"},
                nombre:{bsonType:"string"},
                documento:{bsonType:"string"},
                nivel_mu:{enum:["basico", "intermedio", "avanzado"],
                    description:"must be either basico, intermedio or avanzado"
                },
                contacto:{bsonType:"string"},
                id_sede:{bsonType:"int"}
            }
        }
    }
});
 
// coleccion de Profesores
db.createCollection("Profesores",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["_id","nombre_pro","especialidad","cursos_asignados","experiencia","id_sede"],
            properties:{
                _id:{bsonType:"int"},
                nombre_pro:{bsonType:"string"},
                especialidad:{bsonType:"string"},
                cursos_asignados:{bsonType:"array"},
                experiencia:{bsonType:"string"},
                id_sede:{bsonType:"int"}
            }
        }
    }
}
);

// coleccion de cursos
db.createCollection("Cursos",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["_id","nombre_curso","horario","cupos","duracion","nivel","id_instrumento"],
            properties:{
                _id:{bsonType:"int"},
                nombre_curso:{bsonType:"string"},
                horario:{enum:["6:00AM-2:00PM","2:00PM-10:00PM"],
                    description:"must be 6:00AM-2:00PM or 2:00PM-10:00PM"
                },
                cupos:{bsonType:"int"},
                duracion:{bsonType:"string"},
                nivel:{enum:["basico", "intermedio", "avanzado"],
                    description:"must be either basico, intermedio or avanzado"
                },
                id_instrumento:{bsonType:"int"}
            }
        }
    }
});

// coleccion curso_profesor
db.createCollection("Curso_profesor",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["_id","id_curso","id_profesor","id_sede"],
            properties:{
                _id:{bsonType:"int"},
                id_curso:{bsonType:"int"},
                id_sede:{bsonType:"int"}
            }
        }
    }
});

// coleccion Resevas_instrumento
db.createCollection("Reservas_instrumento",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["_id","id_instrumento","id_estudiante","fecha_rese","fecha_finrese"],
            properties:{
                _id:{bsonType:"int"},
                id_instrumento:{bsonType:"int"},
                id_estudiante:{bsonType:"int"},
                fecha_rese:{bsonType:"date"},
                fecha_finrese:{bsonType:"date"}
            }
        }
    }
});

// Creación de los jsonschemas
db.createCollection('Usuarios', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['tipo_usuario', 'descripcion'],
            properties: {
                tipo_usuario: { bsonType: 'string' },
                descripcion: { bsonType: 'string' }
            }
        }
    }
});


db.createCollection('Instrumentos', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['nombre_instrumento', 'id_sede', 'disponibilidad'],
            properties: {
                nombre_instrumento: {bsonType: 'string'},
                id_sede: {bsonType: 'int'},
                disponibilidad: {bsonType: 'bool'}
            }
        }
    }
});


db.createCollection('Inscripciones', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['id_estudiante', 'id_curso', 'id_sede',"fecha_inscripcion"],
            properties: {
                id_estudiante: {bsonType: 'int'},
                id_curso: {bsonType: 'int'},
                id_sede: {bsonType: 'int'},
                fecha_inscripcion: {bsonType: "date"}
            }
        }
    }
});


db.createCollection('Sedes', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['ciudad', 'direccion', 'capacidad', 'n_estudiantes', 'cursos_disponibles'],
            properties: {
                ciudad: {bsonType: 'string'},
                direccion: {bsonType: 'string'},
                capacidad: {bsonType: 'int'},
                n_estudiantes: {bsonType: 'int'},
                cursos_disponibles: {bsonType: 'int'}
            }
        }
    }
});


// creación de indices


// indice por sede 
db.Profesores.createIndex({ id_sede: 1 });

// indice por cursos asignados 
db.Profesores.createIndex({ cursos_asignados: 1 });

// indice por sede
db.Cursos.createIndex({ id_sede: 1 });

// indice por nombre_curso 
db.Cursos.createIndex({ nombre_curso: 1 });

// indice por nivel para consultas por nivel
db.Cursos.createIndex({ nivel: 1 });

// indice combinado para cupos 
db.Cursos.createIndex({ _id: 1, cupos: 1 });

// indice cursos con profesores
db.Curso_profesor.createIndex({ id_curso: 1, id_profesor: 1 });

// indice por sede 
db.Curso_profesor.createIndex({ id_sede: 1 });

// indice de instrumento 
db.Reservas_instrumento.createIndex({ id_instrumento: 1 });

// indice por estudiante 
db.Reservas_instrumento.createIndex({ id_estudiante: 1 });

// indice de fechas
db.Reservas_instrumento.createIndex({ fecha_rese: -1, fecha_finrese: -1 });



// Colección Instrumentos
db.Instrumentos.createIndex({ id_sede: 1 });
db.Instrumentos.createIndex({ nombre_instrumento: 1 });
db.Instrumentos.createIndex({ disponibilidad: 1 });


// Inscriptions Collection
db.Inscripciones.createIndex({ id_sede: 1});
db.Inscripciones.createIndex({ id_sede: 1, id_curso: 1 });
db.Inscripciones.createIndex({ id_estudiante: 1 });


// Colección Reservas
db.Sedes.createIndex({ ciudad: 1 });*/
