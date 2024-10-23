import "./App.css";

import MyTitle from "./composent/MyTitle";
import PokemonCard from "./composent/PokemonCard";
import { useState } from "react";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIdex] = useState(0);
  const pokemon = pokemonList[pokemonIndex];
  //bouton suivant
  const handClickSuivant = function () {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIdex(pokemonIndex + 1);
    }
  }
  //bouton arrière
  const handClickArriere = function () {
    if (pokemonIndex > 0) {
      setPokemonIdex(pokemonIndex - 1);
    }
  }

  return (
    <section>
      <MyTitle />
      <PokemonCard pokemon={pokemon} />
      <button type="button" onClick={handClickArriere}>Précédent</button>
      <button type="button" onClick={handClickSuivant}>Suivant</button>
    </section>
  );
}

export default App;
