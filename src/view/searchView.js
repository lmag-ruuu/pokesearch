import { elements } from "./base.js";
import {
  createImg,
  putId,
  putName,
  putTypes,
  getTypes,
} from "./pokemonView.js";

//Get and clear input!
export const getInput = () => elements.searchField.value;
export const clearInput = () => {
  elements.searchField.value = "";
};

export const clearDataList = () => {
  elements.dataNames.innerHTML = "";
};

export const renderDataList = (poke) => {
  const markup = `
    <option value="${poke}">
  `;
  elements.dataNames.insertAdjacentHTML("beforeend", markup);
};

export const renderPokemon = (pokemon) => {
  //Div principal
  const divPrincipal = document.createElement("div");
  divPrincipal.className = "result-content";

  //Link container
  const linkPoke = document.createElement("a");
  linkPoke.href = "#";
  linkPoke.dataset.id = pokemon.id;
  linkPoke.className = "card";

  //create poke-card
  const pokeCard = document.createElement("div");
  pokeCard.className = "poke-card";

  //Img Container
  const divImgC = document.createElement("div");
  divImgC.className = "image";

  //Figure for image
  const figureImg = document.createElement("figure");

  //Img
  const img = createImg(pokemon.img);

  //pokedex num
  const pokeId = putId(pokemon.id);

  //Put img and id on figure
  figureImg.appendChild(img);
  figureImg.appendChild(pokeId);

  //Put figure on img container
  divImgC.appendChild(figureImg);

  //put image on card
  pokeCard.appendChild(divImgC);

  //Name
  const pokeName = putName(pokemon.name);
  pokeCard.appendChild(pokeName);

  //Types
  const types = getTypes(pokemon.types);
  const divTypes = putTypes(types);
  divTypes.className = "type";
  //Add type on card
  pokeCard.appendChild(divTypes);

  //Finally, poke on link
  linkPoke.appendChild(pokeCard);
  divPrincipal.appendChild(linkPoke);
  elements.results.appendChild(divPrincipal);
};

export const clearPokemon = () => {
  elements.results.innerHTML = "";
  elements.resultCont.innerHTML = "";
};
