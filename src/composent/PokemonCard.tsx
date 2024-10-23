interface verifPokemon {
    pokemon: {
        name: string,
        imgSrc?: string
    }
}

function PokemonCard({ pokemon }: verifPokemon) {
    let pokemonImage = <></>;
    if (pokemon.imgSrc) {
        pokemonImage = <img src={pokemon.imgSrc} alt={`Pokemon ${pokemon.name}`} />;
    } else {
        pokemonImage = <p>???</p>;
    }
    return (
        <figure>
            {pokemonImage}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

export default PokemonCard;