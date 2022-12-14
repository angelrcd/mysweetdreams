/**
 * Función en que todos los valores introducidos en los inputs verifican
 * su correspondiente expresión regular, devuelve true solo si se verifican todas.
 * @param {Object} inputs Cada key es el input introducido en un formulario
 * y su correspondiente valor una expresion regular que lo valida
 */
export function areFormInputsValid (inputs) {
  for (const input in inputs) {
    if (!inputs[input].test(input)) {
      return false
    }
  }
  return true
}
