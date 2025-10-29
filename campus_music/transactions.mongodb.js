 use('Campus_Music');


/*
    Esta función implementa una transacción que:
        1. Valida que existna cupos disponibles.
        2. Insertar el registro de inscripción.
        3. Decrementa el contador de cupos disponibles.
        4. Maneja errores con rollback automatico.
*/


async function InscribirEstudianteConTransaccion(
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

        // ============= Paso 3: Validar cupos disponibles =============
        const curso = db.cursos.findOne(
            {_id: id_curso},
            {session: session}
        );

        // validación de curso
        if (!curso) {
            throw new Error(`El curso con el ID ${id_curso} no existe`);
        };

        // validación de los cupos
        if (curso.cupos <= 0) {
            throw new Error(`No hay cupos disponibles en el curso "${curso.nombre_curso}"`);
            
        };

        // ============= Paso 4: Validar que el estudiante exista =============
        const estudiante = db.estudiantes.findOne(
            {_id: id_estudiante},
            {session: session}
        );

        // validación de existencia del estudiante
        if (!estudiante) {
            throw new Error(`El Estudiante con el ID ${id_estudiante} no existe`);
        };

        // ============= Paso 5: Validar la inscripción =============
        const inscripcionExistente = db.inscripciones.findOne(
            {
                _id: id_inscripcion,
                id_curso: id_curso
            },
            {session: session}
        );

        // validación de inscripción del estudiante
        if (inscripcionExistente) {
            throw new Error(`El Estudiante ya está inscrito en el curso (Inscripción ID: ${inscripcionExistente._id})`);
        };


        // ============= Paso 6: Insertar inscripción =============
        const resultadoInscripcion = db.inscripciones.insertOne(
            {
                _id: id_inscripcion,
                id_estudiante: id_estudiante,
                id_sede: id_sede,
                id_curso: id_curso,
                fecha_inscripcion: fecha_inscripcion
            },
            { session: session }
        );


        // ============= Paso 7: Decrementar cupos del curso =============
        const resultadoCurso = db.cursos.updateOne(
            { _id: id_curso },
            { $inc: { cupos: -1 } },
            { session: session }
        );


        if (resultadoCurso.modifiedCount === 0) {
            throw new Error("No se pudo actualizar los cupos del curso");
        };

        // ============= Paso 8: Commit de la transaccion =============
        // Guardar los datos
        await session.commitTransaction();

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
        await session.abortTransaction();

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
async function pruebaExitosa(params) {
    const fecha = new Date("2025-10-28");
    const resultado1 = await InscribirEstudianteConTransaccion(
        31,
        1,
        4,
        2,
        fecha
    );
    printjson(resultado1);
}

pruebaExitosa().then();


// ============= 2. Inscripción duplicada =============
async function inscripcionDuplicada () {
    const resultado2 = await InscribirEstudianteConTransaccion(
        31,
        1,
        1,
        1,
        fecha
    );
    printjson(resultado2);
}

inscripcionDuplicada().then();


// ============= 3. Estudiante sin cupos =============
async function estudianteSinCupo () {
    // primero, forzamos un curso a tener 0 cupos
    db.cursos.updateOne(
        { _id: 12 },
        { $set: { cupos: 0 } }
    );
    
    const resultado3 = await InscribirEstudianteConTransaccion(
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

estudianteSinCupo().then();

// ============= 4. Estudiante no existe =============
async function estudianteNoExistente () {
    const resultado4 = await InscribirEstudianteConTransaccion(
        34,
        999,
        5,
        2,
        fecha
    );
    printjson(resultado4);
}

estudianteNoExistente().then();