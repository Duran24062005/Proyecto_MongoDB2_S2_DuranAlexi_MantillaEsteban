// agregaciones
// 1. ¿Cuántos estudiantes se inscribieron por sede en el último mes?
db.Inscripciones.aggregate([
    {
        $addFields: {
          mes:{$month:"$fecha_inscripcion"}
        }
    },
    {
        $match: {
          mes:{$eq:8}
        }
    },
    {
        $group: {
          _id:{id_sede:"$id_sede"},
          cantidad_inscritos:{$sum:1},
          }
        
    }
]);

// 2. ¿Cuáles son los cursos más demandados en cada sede?
db.Inscripciones.aggregate([
  {
    $group: {
      _id: { id_curso: "$id_curso", id_sede: "$id_sede" },
      total_inscripciones: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "Cursos",
      localField: "_id.id_curso",
      foreignField: "_id",
      as: "curso"
    }
  },
  { 
    $unwind: "$curso" 
  },

  {
    $lookup: {
      from: "Sedes",
      localField: "_id.id_sede",
      foreignField: "_id",
      as: "sede"
    }
  },
  { 
    $unwind: "$sede" 
  },

  {
    $group: {
      _id: "$_id.id_sede",
      nombre_sede: { $first: "$sede.nombre_sede" },
      cursos: {
        $push: {
          nombre_curso: "$curso.nombre_curso",
          total_inscripciones: "$total_inscripciones"
        }
      },
      max_inscripciones: { $max: "$total_inscripciones" }
    }
  },
  {
    $project: {
      _id: 0,
      nombre_sede: 1,
      cursos_mas_demandados: {
        $filter: {
          input: "$cursos",
          as: "curso",
          cond: { $eq: ["$$curso.total_inscripciones", "$max_inscripciones"] }
        }
      }
    }
  }
]);



// 3. ¿Cuál es el ingreso total generado por inscripciones en cada sede?
db.inscripciones.aggregate([
  {
    $lookup: {
      from: "cursos",
      localField: "id_curso",
      foreignField: "_id",
      as: "curso_info"
    }
  },
  { 
    $unwind: "$curso_info" 
  },


  {
    $group: {
      _id: "$id_sede",
      total_ingresos: { $sum: "$curso_info.costo" },
      total_inscripciones: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "sedes",
      localField: "_id",
      foreignField: "_id",
      as: "sede_info"
    }
  },
  { 
    $unwind: "$sede_info" 
  },

  {
    $project: {
      _id: 0,
      id_sede: "$_id",
      ciudad: "$sede_info.ciudad",
      total_inscripciones: 1,
      total_ingresos: 1
    }
  },
  { $sort: { total_ingresos: -1 } }
]);



// 4. ¿Qué profesor tiene más estudiantes asignados?
db.inscripciones.aggregate([
  {
    $lookup: {
      from: "cursos",
      localField: "id_curso",
      foreignField: "_id",
      as: "curso_info"
    }
  },
  { 
    $unwind: "$curso_info" 
  },

  {
    $group: {
      _id: "$curso_info.profesor_id",
      total_estudiantes: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "profesores",
      localField: "_id",
      foreignField: "_id",
      as: "profesor_info"
    }
  },
  { 
    $unwind: "$profesor_info" 
  },

  {
    $lookup: {
      from: "usuarios",
      localField: "profesor_info.usuario_id",
      foreignField: "_id",
      as: "usuario_info"
    }
  },
  { 
    $unwind: "$usuario_info" 
  },

  {
    $project: {
      _id: 0,
      id_profesor: "$_id",
      nombre_profesor: "$usuario_info.nombre_usuario",
      especialidad: "$profesor_info.especialidad",
      total_estudiantes: 1
    }
  },
  { $sort: { total_estudiantes: -1 } },
  { $limit: 1 }
]);



// 5. ¿Qué instrumento es el más reservado?
db.reservas_instrumento.aggregate([
  {
    $group: {
      _id: "$id_instrumento", 
      total_reservas: { $sum: 1 } 
    }
  },
  {
    $lookup: {
      from: "Instrumentos", 
      localField: "_id", 
      foreignField: "_id", 
      as: "instrumento_info"
    }
  },
  {
    $unwind: "$instrumento_info"
  },

  {
    $project: {
      _id: 0,
      nombre_instrumento: "$instrumento_info.nombre_instrumento",
      tipo: "$instrumento_info.tipo",
      total_reservas: 1
    }
  },
  {
    $sort: { total_reservas: -1 } 
  },
  {
    $limit: 1 
  }
]);



// 6. Mostrar el **historial de cursos de un estudiante** (fecha, sede, curso, profesor, nivel, costo).
db.inscripciones.aggregate([
  {
    $match: { id_estudiante: 1 } 
  },
  {
    $lookup: {
      from: "Cursos",
      localField: "id_curso",
      foreignField: "_id",
      as: "curso_info"
    }
  },
  {
    $unwind: "$curso_info"
  },

  {
    $lookup: {
      from: "Profesores",
      localField: "curso_info.id_profesor",
      foreignField: "_id",
      as: "profesor_info"
    }
  },
  {
    $unwind: "$profesor_info"
  },

  {
    $lookup: {
      from: "Sedes",
      localField: "id_sede",
      foreignField: "_id",
      as: "sede_info"
    }
  },
  {
    $unwind: "$sede_info"
  },

  {
    $project: {
      _id: 0,
      fecha_inscripcion: 1,
      sede: "$sede_info.nombre_sede",
      curso: "$curso_info.nombre_curso",
      profesor: "$profesor_info.nombre_pro",
      nivel: "$curso_info.nivel",
      costo: "$curso_info.costo"
    }
  },
  {
    $sort: { fecha_inscripcion: 1 } 
  }
]);



// 7. Listar los **cursos actualmente en ejecución** en cada sede.

db.cursos.aggregate([
  {
    $match: { activo: true } 
  },
  {
    $lookup: {
      from: "sedes",
      localField: "sede_id",
      foreignField: "_id",
      as: "sede_info"
    }
  },
  { 
    $unwind: "$sede_info" 
  },

  {
    $group: {
      _id: "$sede_info.nombre_sede",
      cursos_en_ejecucion: {
        $push: {
          nombre_curso: "$nombre_curso",
          instrumento: "$instrumento",
          nivel: "$nivel",
          duracion_meses: "$duracion_meses",
          costo: "$costo",
          profesor_id: "$profesor_id"
        }
      }
    }
  },
  {
    $project: {
      _id: 0,
      nombre_sede: "$_id",
      cursos_en_ejecucion: 1
    }
  }
]);


// 8. Detectar cursos que **excedieron el cupo** permitido en algún momento.
db.inscripciones.aggregate([
  {
    $lookup: {
      from: "Cursos",
      localField: "id_curso",
      foreignField: "_id",
      as: "curso_info"
    }
  },
  {
    $unwind: "$curso_info"
  },

  {
    $group: {
      _id: "$id_curso",
      nombre_curso: { $first: "$curso_info.nombre_curso" },
      id_sede: { $first: "$id_sede" },
      cupo_maximo: { $first: "$curso_info.cupo_maximo" },
      total_inscritos: { $sum: 1 }
    }
  },
  {
    $match: {
      $expr: { $gt: ["$total_inscritos", "$cupo_maximo"] } 
    }
  },
  {
    $lookup: {
      from: "Sedes",
      localField: "id_sede",
      foreignField: "_id",
      as: "sede_info"
    }
  },
  {
    $unwind: "$sede_info"
  },

  {
    $project: {
      _id: 0,
      nombre_curso: 1,
      sede: "$sede_info.nombre_sede",
      total_inscritos: 1,
      cupo_maximo: 1,
      excedente: { $subtract: ["$total_inscritos", "$cupo_maximo"] }
    }
  }
]);
