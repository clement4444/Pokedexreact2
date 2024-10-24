interface verifPokemon {
    name: string,
    imgSrc?: string
}

interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: verifPokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
    //bouton suivant
    const handClickSuivant = function () {
        if (pokemonIndex < pokemonList.length - 1) {
            setPokemonIndex(pokemonIndex + 1);
        }
    }
    //bouton arrière
    const handClickArriere = function () {
        if (pokemonIndex > 0) {
            setPokemonIndex(pokemonIndex - 1);
        }
    }
    return (
        <>
            <button type="button" onClick={handClickArriere}>Précédent</button>
            <button type="button" onClick={handClickSuivant}>Suivant</button>
        </>
    );
}

export default NavBar;