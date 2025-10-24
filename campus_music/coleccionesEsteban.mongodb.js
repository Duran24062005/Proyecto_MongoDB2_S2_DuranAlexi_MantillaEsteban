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
                cursos_asignados:{bsonType:"object"},
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

