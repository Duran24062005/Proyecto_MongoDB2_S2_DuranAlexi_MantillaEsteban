// 
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
        session.startTrasaction({
            readConcern: { level: "snapshot" },
            writeConcern: { w: "majority" },
            readPreference: "primary"
        });

        // ============= Paso 3: Validar cupos disponibles =============
        const curso = db.cursos.find(
            {_id: id_curso},
            {session: session}
        );

        // validación de curso
        if (!curso) {
            throw new Error(`El curso con el ID ${id_curso} no existe`);
        }
        
    } catch (error) {
        
    }
    
}

// Inscribir una 