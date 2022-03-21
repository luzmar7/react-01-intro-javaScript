// Objeto Literales

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 55321321,
    lat: 14.3232,
    lng: 34.923321
  
  }
}
console.log( { persona: persona } ) // igual a 
console.log( { persona } )
console.table( persona )

console.log( persona )

// no se deve hacer si esta asignando los valores, son el mismo espacio en memoria
const persona2 = persona
persona2.nombre = 'Peter'
console.log(persona2)
console.log( persona)

// clon del objeto -> asigna un nuevo espacio en memoria
const persona3 = { ...persona }
