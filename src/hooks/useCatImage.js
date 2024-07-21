import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(',')
    const fetchUrl = `https://cataas.com/cat/says/${threeFirstWords}?size=50?fontSize=50&fontColor=red`

    fetch(fetchUrl)
      .then(response => {
        console.log(response)
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
