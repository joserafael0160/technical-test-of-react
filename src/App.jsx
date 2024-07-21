import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = "https://cataas.com"

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // get the fact
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])
  // get image
  useEffect(() => {
    if (!fact) return 
    const threeFirstWords = fact.split(" ",3).join(" ")

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50?fontSize=50&fontColor=red`)
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}  
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}  
    </main>
  )
}