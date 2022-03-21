//clg + enter = console.log
// Desestructuracion
// Asigignacion Desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Iroman',
  rango: 'Soldado'
}
console.log( persona.nombre )
console.log( persona.edad )
console.log( persona.clave )

const { nombre, edad: edad2 , clave } = persona
console.log(nombre, edad2)


const retornaPersona = ( usuario ) => {
  const { edad, clave, nombre } = usuario
  console.log( edad, clave, nombre)

}
retornaPersona( persona )


const retornaPersona2 = ( { nombre, edad, rango = 'Capitan' } ) => {
  console.log( nombre, edad, rango )

}
retornaPersona2( persona )


const retornaPersona3 = ( { clave, nombre, edad, rango = 'Capitan' } ) => {
  // console.log( nombre, edad, rango )
  return {
    nombreClave : clave,
    anios: edad
  }
}
const avenger = retornaPersona3( persona )
console.log(avenger)


// const useContext = ( { clave, nombre, edad, rango = 'Capitan' } ) => {
//   // console.log( nombre, edad, rango )
//   return {
//     nombreClave : clave,
//     anios: edad
//   }
// }
// const avenger2 = useContext( persona )
// console.log(avenger2)
