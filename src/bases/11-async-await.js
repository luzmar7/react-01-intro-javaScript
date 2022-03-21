
// const getImagenPromesa = () => {
//  const promesa = new Promise( (resolve, reject) => {
//    resolve('https://ajasjdhjs.com')
//   })
//   return promesa
// }

// const getImagenPromesa = () => 
//   new Promise( resolve => resolve('https://ajasjdhjs.com'))

// getImagenPromesa().then( console.log )

const getImagen = async () => {

  try {
    const apiKey = 'IMAVkyIwJMZ15lVvMYUfPYnLwtjbiq7d'
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const { data } = await resp.json()
  
    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append( img )
    console.log(data)
  } catch (error) {
    // manejo del error
    console.error(error)
    
  }

}

getImagen().then( console.log )

