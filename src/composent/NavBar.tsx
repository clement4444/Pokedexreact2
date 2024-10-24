interface verifPokemon {
    name: string,
    imgSrc?: string
}

interface NavBarProps {
    setPokemonIndex: (index: number) => void;
    pokemonList: verifPokemon[];
}

function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
    const handSelectPokemon = function (index) {
        setPokemonIndex(index);
    }
    return (
        <>
            {pokemonList.map((iPokemon, index) => (
                <button
                    key={index}
                    type="button"
                    onClick={() => handSelectPokemon(index)}>
                    {iPokemon.name}
                </button >
            ))
            }
        </>
    );
}

export default NavBar;