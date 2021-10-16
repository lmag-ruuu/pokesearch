import "../src/css/style.css";
import Search from "./model/Search";
import Pokemon from "./model/Pokemon";
import * as pokemonView from "./view/pokemonView";
import * as searchView from "./view/searchView";
import { elements } from "./view/base.js";
import { dictionary } from "./model/dictionary";

//State pokemon
const PokeObj = {};
PokeObj.listToSearch = [""];
PokeObj.pokeDatas = [""];

/* SEARCH */
//Type the name in the input and filter first 7 results
const filter = () => {
  searchView.clearDataList();
  const text = searchView.getInput().toLowerCase();
  // const regex = /^${text}/g;
  elements.results.addEventListener("click", clickCard);
  if (text) {
    let count = 0;
    PokeObj.listToSearch.splice(0, PokeObj.listToSearch.length);
    for (let i = 0; i < dictionary.length; i++) {
      if (dictionary[i].indexOf(text) !== -1) {
        count++;
        PokeObj.listToSearch.push(dictionary[i]);
        searchView.renderDataList(dictionary[i]);
      }
      if (count === 7) {
        break;
      }
    }
  }
};

//Search and create poke
const searchCtrl = async () => {
  //Clear inputs and data old pokemon
  searchView.clearPokemon();
  PokeObj.pokeDatas.splice(0, PokeObj.pokeDatas.length);
  //Look for pokes on input
  if (PokeObj.listToSearch.length > 0) {
    //If exists
    for (let i = 0; i < PokeObj.listToSearch.length; i++) {
      PokeObj.search = new Search(PokeObj.listToSearch[i]);
      searchView.clearInput();
      try {
        await PokeObj.search.getResults();
        const pokemo = new Pokemon(PokeObj.search.data);
        PokeObj.pokeDatas.push(pokemo);
      } catch (err) {
        console.log(err);
        alert("Something went wrong!");
      }
    }
    //Render all pokes at end
    PokeObj.pokeDatas.forEach((poke) => {
      searchView.renderPokemon(poke);
    });
  } else {
    alert("That pokemon was not found!");
    searchView.clearInput();
  }
};

//Now, click on poke to view full data
const pokeCtrl = (id) => {
  searchView.clearPokemon();
  const poke = PokeObj.pokeDatas.find((poke) => poke.id === id);
  pokemonView.renderPokeData(poke);
  elements.results.removeEventListener("click", clickCard);
};

//Filter input to search name
elements.searchField.addEventListener("input", filter);
//Search name pokemo selected
elements.searchForm.addEventListener("submit", (el) => {
  el.preventDefault();
  searchCtrl();
});
//Click on pokemon card
const clickCard = (el) => {
  const id = el.target.closest(".poke-card").dataset.id;
  pokeCtrl(parseInt(id));
};
