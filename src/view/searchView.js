import { elements } from "./base.js";
import { createImg, putId, putName, putTypes } from "./pokemonView.js";

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
  divPrincipal.className = "card";
  divPrincipal.dataset.id = pokemon.id;

  //Link container
  const linkPoke = document.createElement("a");
  linkPoke.href = "#";

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
  const divTypes = putTypes(pokemon.types);
  divTypes.className = "type";
  //Add type on card
  pokeCard.appendChild(divTypes);

  //Finally, poke on link
  linkPoke.appendChild(pokeCard);
  elements.results.appendChild(linkPoke);
};

export const clearPokemon = () => {
  elements.results.innerHTML = "";
};
