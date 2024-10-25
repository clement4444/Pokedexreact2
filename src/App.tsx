import "./App.css";

import MyTitle from "./composent/MyTitle";
import PokemonCard from "./composent/PokemonCard";
import NavBar from "./composent/NavBar";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  useEffect(
    () => {
      alert("hello pokemon trainer :)");
    },
    []
  );


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

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemon = pokemonList[pokemonIndex];

  return (
    <section>
      <MyTitle />
      <PokemonCard pokemon={pokemon} />
      <NavBar
        setPokemonIndex={setPokemonIndex}
        pokemonList={pokemonList} />
    </section>
  );
}

export default App;
