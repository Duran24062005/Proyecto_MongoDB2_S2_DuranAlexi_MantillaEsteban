use('Campus_Music');

// creacion de colecciones 

// coleccion estudiantes 
db.createCollection("Estudiantes",{
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
                esperiencia:{bsonType:"string"},
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
            required:["_id","nombre_curso","horario","cupos","duracion","nivel","id_instumento"],
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
                id_instumento:{bsonType:"int"},
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
            required: ['tipo_usuario', 'descripción'],
            properties: {
                _id:{bsonType:"int"},
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
            required: ['nombre_instrumento', 'id_Sede', 'disponibilidad'],
            properties: {
                _id:{bsonType:"int"},
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
            required: ['id_estudiante', 'id_curso', 'id_sede'],
            properties: {
                _id:{bsonType:"int"},
                id_estudiante: {bsonType: 'int'},
                id_curso: {bsonType: 'int'},
                id_sede: {bsonType: 'int'}
            }
        }
    }
});


db.createCollection('Sedes', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['ciudad', 'dirección', 'capacidad', 'n_estudiantes', 'cursos_diosponibles'],
            properties: {
                _id:{bsonType:"int"},
                ciudad: {bsonType: 'string'},
                direccionm: {bsonType: 'string'},
                capacidad: {bsonType: 'int'},
                n_estudiantes: {bsonType: 'int'},
                cursos_disponibles: {bsonType: 'int'}
            }
        }
    }
});


// creación de indices

// indice por sede
db.Estudiantes.createIndex({ id_sede: 1 });

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
db.Inscripciones.createIndex({ id_sede: 1, fecha_inscripcion: -1 });
db.Inscripciones.createIndex({ id_sede: 1, id_curso: 1 });
db.Inscripciones.createIndex({ id_estudiante: 1 });

// Colección Cursos
db.Cursos.createIndex({ id_profesor: 1 });
db.Cursos.createIndex({ id_curso: 1 });
db.Cursos.createIndex({ fecha_inicio: 1, fecha_fin: 1 });
db.Cursos.createIndex({ n_estudiantes: 1, cupo_maximo: 1 });


// Colección Reservas
db.Sedes.createIndex({ ciudad: 1 });


