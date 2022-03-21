// Funciones en JS
//clg + enter = console.log


// no se recomienda hacer asi las funciones
// function saludar( nombre ) {
//   return `Hola, ${ nombre }`
// }
// console.log( saludar('Goku'))


const saludar = function ( nombre ){
  return `Hola, ${ nombre }`
}
console.log( saludar('Goku') )


const saludar2 = ( nombre ) => {
  return `Hola, ${ nombre }`
}
console.log( saludar2('Goku') )

const saludar3 = ( nombre ) => `Hola, ${ nombre }`
console.log( saludar3('Goku') )

const saludar4 = ( ) => `Hola Mundo`
console.log( saludar4() )


const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'El_Papi1502'
  }
}
console.log(getUser())


const getUser2 = () => ({ 
    uid: 'ABC123',
    username: 'El_Papi1502'
  })
const user = getUser2()  
console.log(user)

// Tarea
// 1. transforma a una funcion de flecha
// 2. tiene que retornar un objeto implicito
// 3. prueba
function getUsuarioActivo( nombre ) {
  return {
    uid: 'ABC123',
    username: nombre
  }
}
const usuarioActivo = getUsuarioActivo('Fernando')
console.log(usuarioActivo)


const getUsuarioActivo2 = (nombre) => ({
  uid: 'ABC123',
  username: nombre
})
const usuarioActivo2 = getUsuarioActivo2('Mariluz')
console.log( usuarioActivo2 )
