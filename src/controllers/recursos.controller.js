
import * as recursosService from '../services/recursos.service.js';

// Función para crear un recurso
export async function crear(req, res) {
  try {
    const recurso = await recursosService.crearRecurso(req.body);

    res.status(201).json(recurso);
  } catch (error) {
    res.status(400).json({
      mensaje: 'Error al crear el recurso',
      error: error.message,
    });
  }
}

// Función para consultar todos los recursos
export async function listar(req, res) {
  try {
    const recursos = await recursosService.obtenerRecursos();

    res.status(200).json(recursos);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al consultar los recursos',
      error: error.message,
    });
  }
}
// Función para consultar un recurso por su ID
export async function consultarPorId(req, res) {
  try {
    const recurso = await recursosService.obtenerRecursoPorId(req.params.id);

    if (!recurso) {
      return res.status(404).json({
        mensaje: 'Recurso no encontrado',
      });
    }

    res.status(200).json(recurso);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al consultar el recurso',
      error: error.message,
    });
  }
}

 // Función para actualizar un recurso por su ID
export async function actualizar(req, res) {
  try {
    const recurso = await recursosService.actualizarRecurso(
      req.params.id,
      req.body
    );

    // Verificamos si el recurso existe
    if (!recurso) {
      return res.status(404).json({
        mensaje: 'Recurso no encontrado',
      });
    }

    res.status(200).json({
      mensaje: 'Recurso actualizado correctamente',
      recurso,
    });
  } catch (error) {
    res.status(400).json({
      mensaje: 'Error al actualizar el recurso',
      error: error.message,
    });
  }
}
