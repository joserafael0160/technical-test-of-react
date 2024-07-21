import { useEffect, useState } from "react"
import { getRandomFact } from "./services/facts"
import { useCatImage } from "./hooks/useCatImage"

const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])
  return { fact, refreshFact}
}

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  } 

  return (
    <main>
      <h1>Kittens App</h1>

      <button onClick={handleClick}>Get new fact</button>
      
      {fact && <p>{fact}</p>}  
      <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />
    </main>
  )
}