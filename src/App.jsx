import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = "https://cataas.com"

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeFirstWords = fact.split(" ",3).join(" ")
        console.log(threeFirstWords) 
        const imageUrlFetch = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?Size=50?fontSize=50&fontColor=red`)
          .then(response => {
            const { url } = response
            setImageUrl(url)
            console.log(url)
              
          })
      })
  }, [])

  /*useEffect(() => {
    fetch(cat)
      .then(res => res.json())
      .then(data => setFact(data))
  },[])
*/
  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}  
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}  
    </main>
  )
}