
// import './index.css'

const PokemonCard = ({pokemon}) => {
    return (
        <>
            <li className="pokemon-card">
                <figure>
                    <img className="pokemon-image" src={pokemon.sprites.other.dream_world.front_default} alt="" />
                </figure>
                <h1 className="pokemon-name">{pokemon.name}</h1>
                <div className="pokemon-info pokemon-highlight">
                    <p>{pokemon.types.map((type) => type.type.name).join(', ')}</p>
                </div>
                <div className="grid-three-cols">
                    <p className="pokemon-info">
                        <span>Height: {pokemon.height} </span>
                    </p>
                    <p className="pokemon-info">
                        <span>Weight: {pokemon.weight} </span>
                    </p>
                    <p className="pokemon-info">
                        <span>Speed: {pokemon.stats[5].base_stat} </span>
                    </p>
                </div>
                <div className="grid-three-cols">
                    <div className="pokemon-info">
                        <p>{pokemon.base_experience} </p>
                        <span>Experience: </span>
                    </div>
                    <div className="pokemon-info">
                        <p>{pokemon.stats[1].base_stat}</p>
                        <span>Attack:  </span>
                    </div>
                    <div className="pokemon-info">
                        <p>
                            {
                                pokemon.abilities
                                .map((ability) => ability.ability.name)
                                .slice(0,1)
                                .join(', ')
                                
                            }
                        </p>
                        <span>Abilities: </span>
                    </div>
                </div>
            </li>
        </>        
    )
}

export default PokemonCard