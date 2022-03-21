//clg + enter = console.log

import { getHeroeById } from "./bases/08-imp-exp";


// const promesa = new Promise((resolve, reject ) => {
//   setTimeout(() => {
//     resolve()
//   }, 200);

// })

// promesa.then(() => {
//   console.log('Then de la promesa')
// })

// const promesa2 = new Promise((resolve, reject ) => {
//   setTimeout(() => {
//     // Tarea
//     // importar 
//     const p1 = getHeroeById(2)
//     console.log(p1)
//     resolve( p1 )
//     // reject('No se pudo encontrar el heroe')
//   }, 200);

// })

// promesa2.then(( heroe ) => {
//   console.log('Then de la promesa', heroe)
// }).catch( err => console.warn(err))


const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject ) => {
    setTimeout(() => {
      // Tarea
      // importar 
      const p1 = getHeroeById(id)
      p1 !== undefined ? resolve(p1): reject('no se encontro a el heroe')
      // reject('No se pudo encontrar el heroe')
    }, 200);

  })
}
getHeroeByIdAsync(10)
  .then( heroe => console.log('Heroe', heroe))
  .catch( err => console.warn( err))

  getHeroeByIdAsync(1)
  .then( console.log)
  .catch( console.warn )