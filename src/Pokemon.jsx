import { useState } from "react"
import { useEffect } from "react"

const Pokemon = () => {
  const [data, setData] = useState([])


  const fetchApi = async () => {

    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=24')
      const data = await res.json()

     const soloData =  data.results.map(async (p) => {
        const pokFetch = await fetch(p.url)
        const abc = await pokFetch.json()
        return abc

      })

      const finalData = await Promise.all(soloData)

      setData(finalData)


    } catch (error) {
      console.log(error)

    }
  }


  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <>
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <div>
          <ul className="cards">
            {
              data.map((cur) =>{
                return <li key={cur.id}>{cur.name}</li>
              })
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default Pokemon
