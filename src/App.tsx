import "./App.css";

import MyTitle from "./composent/MyTitle";
import PokemonCard from "./composent/PokemonCard";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  const pokemon = pokemonList[0];
  return (
    <section>
      <MyTitle />
      <PokemonCard pokemon={pokemon} />
    </section>
  );
}

export default App;
