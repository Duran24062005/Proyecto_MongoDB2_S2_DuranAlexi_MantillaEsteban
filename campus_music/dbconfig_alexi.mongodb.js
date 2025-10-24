use('Campus_Music');

// Creación de los jsonschemas
db.createCollection('Usuarios', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['tipo_usuario', 'descripción'],
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
            required: ['nombre_instrumento', 'id_Sede', 'disponibilidad'],
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
            required: ['id_estudiante', 'id_curso', 'id_sede'],
            properties: {
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


