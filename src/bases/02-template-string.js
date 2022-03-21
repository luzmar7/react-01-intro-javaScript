// Variables y constantes
const nombre = 'Mariluz'
const apellido = 'Vargas'
const nombreCompleto = nombre + ' ' + apellido
const nombreCompleto2 = `
${nombre} 
${apellido}
${1 + 1}
`

// ctrl + space -> para que me ayude a encontrar
console.log(nombreCompleto2)

function getSaludo(nombre){
  return 'Hola ' + nombre
}

console.log(`Este es un texto: ${ getSaludo( nombre ) }` )