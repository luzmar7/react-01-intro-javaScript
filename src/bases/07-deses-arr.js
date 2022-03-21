//clg + enter = console.log
// Desestructuracion
// Asigignacion Desestructurante

const personajes = ['Goku', 'Vegeta', 'Trunks']

console.log( personajes[0])
console.log( personajes[1])
console.log( personajes[2])

const [ , , p3 ] = personajes

console.log( p3 )

const retornaArreglo = () => {
  return ['ABC', 123]
}

const arr = retornaArreglo()
console.log(arr)


const [letras, numeros]= retornaArreglo()
console.log(letras, numeros)

// Tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre
const usState = ( valor ) => {
  return [ valor, () => { console.log('Hola mundo')}]
}

const arr2 = usState('Goku')
console.log(arr2)

arr2[1]()


const [ nombre, setNombre ] = usState( 'Goku' )
console.log(nombre)
setNombre()