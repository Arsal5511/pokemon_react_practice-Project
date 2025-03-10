import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard"


const Pokemon = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] =useState('')


  const fetchApi = async () => {

    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=124')
      const data = await res.json()

      const soloData = data.results.map(async (p) => {
        const pokFetch = await fetch(p.url)
        const abc = await pokFetch.json()
        setLoading(false)
        return abc

      })

      const finalData = await Promise.all(soloData)
      setData(finalData)

    } catch (error) {
      console.log(error)
      setError(error)
      setLoading(false)

    }
  }

  useEffect(() => {
    fetchApi()
  }, [])


  //Search function

  const searchPokemon = data.filter((curr) => curr.name.toLowerCase().includes(search.toLowerCase()))

  if(loading){ 
    return(
      <>
      <h1>Loading</h1>
      </>
    )
  }
  if(error){
    return(
      <>
      <h1>{error.message}</h1>
      </>
    )
  }
  return (
    <>
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input type="text" placeholder="Search Pokemon" value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <div>
          <ul className="cards">
            {
              searchPokemon.map((cur) => {
                return <PokemonCard key={cur.id} pokemon={cur} />
              })
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default Pokemon
