use('Campus_Music');


/*
    Esta función implementa una transacción que:
        1. Valida que existna cupos disponibles.
        2. Insertar el registro de inscripción.
        3. Decrementa el contador de cupos disponibles.
        4. Maneja errores con rollback automatico.
*/


function InscribirEstudianteConTransaccion(
    id_inscripcion,
    id_estudiante,
    id_curso,
    id_sede,
    fecha_inscripcion
) {

    // ============= Paso 1: Iniciar sesión =============
    const session = db.getMongo().startSession();

    try {

        // ============= Paso 2: Iniciar transacción =============
        session.startTransaction({
            readConcern: { level: "snapshot" },
            writeConcern: { w: "majority" },
            readPreference: "primary"
        });

        // Obtener colecciones con la sesión
        const cursosCol = session.getDatabase('Campus_Music').getCollection('cursos');
        const estudiantesCol = session.getDatabase('Campus_Music').getCollection('estudiantes');
        const inscripcionesCol = session.getDatabase('Campus_Music').getCollection('inscripciones');

        // ============= Paso 3: Validar cupos disponibles =============
        const curso = cursosCol.findOne({_id: id_curso});

        // validación de curso
        if (!curso) {
            throw new Error(`El curso con el ID ${id_curso} no existe`);
        };

        // validación de los cupos
        if (curso.cupos <= 0) {
            throw new Error(`No hay cupos disponibles en el curso "${curso.nombre_curso}"`);
            
        };

        // ============= Paso 4: Validar que el estudiante exista =============
        const estudiante = estudiantesCol.findOne({_id: id_estudiante});

        // validación de existencia del estudiante
        if (!estudiante) {
            throw new Error(`El Estudiante con el ID ${id_estudiante} no existe`);
        };

        // ============= Paso 5: Validar la inscripción =============
        const inscripcionExistente = inscripcionesCol.findOne({
            id_estudiante: id_estudiante,
            id_curso: id_curso
        });

        // validación de inscripción del estudiante
        if (inscripcionExistente) {
            throw new Error(`El Estudiante ya está inscrito en el curso (Inscripción ID: ${inscripcionExistente._id})`);
        };


        // ============= Paso 6: Insertar inscripción =============
        const resultadoInscripcion = inscripcionesCol.insertOne({
            _id: id_inscripcion,
            id_estudiante: id_estudiante,
            id_sede: id_sede,
            id_curso: id_curso,
            fecha_inscripcion: fecha_inscripcion
        });


        // ============= Paso 7: Decrementar cupos del curso =============
        const resultadoCurso = cursosCol.updateOne(
            { _id: id_curso },
            { $inc: { cupos: -1 } }
        );


        if (resultadoCurso.modifiedCount === 0) {
            throw new Error("No se pudo actualizar los cupos del curso");
        };

        // ============= Paso 8: Commit de la transaccion =============
        // Guardar los datos
        session.commitTransaction();

        // retorno
        return {
            succes: true,
            message: "Estudiante inscrito correctamente",
            inscripcion_id: id_inscripcion,
            cupos_restantes: curso.cupos - 1
        }

        
    } catch (error) {
        // ============= Paso 9: Manejo de errores =============
        console.log(`Error: ${error.message}\n`);

        // Abortar la transacción (rollback)
        session.abortTransaction();

        return {
            success: false,
            error: error.message
        };
    } finally {
        // ============= Paso 10: Cierre de la session =============
        session.endSession();

    };
    
};





// ============= Casos de prueba =============
// ============= 1. Prueba exitosa =============
function pruebaExitosa(params) {
    const fecha = new Date("2025-10-28");
    const resultado1 = InscribirEstudianteConTransaccion(
        31,
        1,
        4,
        2,
        fecha
    );
    printjson(resultado1);
}

pruebaExitosa();


// ============= 2. Inscripción duplicada =============
function inscripcionDuplicada () {
    const fecha = new Date("2025-10-28");
    const resultado2 = InscribirEstudianteConTransaccion(
        31,
        1,
        4,
        2,
        fecha
    );
    printjson(resultado2);
}

inscripcionDuplicada();


// ============= 3. Estudiante sin cupos =============
function estudianteSinCupo () {
    const fecha = new Date("2025-10-28");
    // primero, forzamos un curso a tener 1 cupo
    db.cursos.updateOne(
        { _id: 12 },
        { $set: { cupos: 1 } }
    );
    
    const resultado3 = InscribirEstudianteConTransaccion(
        33,
        10,  // Nicolas Muñoz
        12,  // Curso sin cupos
        4,
        fecha
    );
    printjson(resultado3);
    
    // restaurar cupos
    db.cursos.updateOne(
        { _id: 12 },
        { $set: { cupos: 5 } }
    );
}

estudianteSinCupo();

// ============= 4. Estudiante no existe =============
function estudianteNoExistente () {
    const fecha = new Date("2025-10-28");
    const resultado4 = InscribirEstudianteConTransaccion(
        34,
        999,
        5,
        2,
        fecha
    );
    printjson(resultado4);
}

estudianteNoExistente();