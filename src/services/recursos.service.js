
import Recurso from '../models/recurso.model.js';

// Función para crear un recurso en la base de datos
export async function crearRecurso(datos) {
  const { nombre, tipo, capacidad } = datos;

  return Recurso.create({
    nombre,
    tipo,
    capacidad,
  });
}

// Función para consultar todos los recursos
export async function obtenerRecursos() {
  return Recurso.findAll();
}

// Función para consultar un recurso por su ID
export async function obtenerRecursoPorId(id) {
  return Recurso.findByPk(id);
}

 // Función para actualizar un recurso por su ID
export async function actualizarRecurso(id, datos) {
  const recurso = await Recurso.findByPk(id);

  // Verificamos si el recurso existe
  if (!recurso) {
    return null;
  }

  // Actualizamos los datos del recurso
  await recurso.update(datos);

  return recurso;
}
