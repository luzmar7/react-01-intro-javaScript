//clg + enter = console.log
// import { heroes } from './data/heroes'

// imp = para importar rapido
// import { heroes } from './data/heroes'
// escribir las (heroes) -> enter o tab
import heroes, { owners } from '../data/heroes'

// const getHeroeById = (id ) => {
//   return heroes.find(( heroe) => {
//     if (heroe.id === id ) {
//       return true
//     } else {
//       return false
//     }
//   })
// }


// const getHeroeById = (id ) => {
//   return heroes.find( (heroe) => heroe.id == id )
// }

console.log(owners)

const getHeroeById = (id ) => heroes.find( (heroe) => heroe.id == id )

console.log( heroes )
console.log( getHeroeById(2))

const getHeroesByOwner = (owner ) => heroes.filter( (heroe) => heroe.owner == owner )

console.log(getHeroesByOwner('DC'))

export {
  getHeroeById,
  getHeroesByOwner
}