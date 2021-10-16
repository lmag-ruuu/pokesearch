import { elements } from "./base.js";
import {
  createImg,
  createStyle,
  putId,
  putName,
  putTypes,
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
  divPrincipal.className = "poke-card";
  divPrincipal.dataset.id = pokemon.id;

  //Name
  const pokeName = putName(pokemon.name);
  divPrincipal.appendChild(pokeName);

  //Img Container
  const divImgC = document.createElement("div");
  divImgC.className = "img-container";

  //Img
  const img = createImg(pokemon.img);
  //Style for img
  createStyle(img, pokemon.types);

  //Add img on container and container on principal
  divImgC.appendChild(img);
  divPrincipal.appendChild(divImgC);

  //Add id
  const pokeId = putId(pokemon.id);
  divPrincipal.appendChild(pokeId);

  //Types
  const divTypes = putTypes(pokemon.types);
  divTypes.className = "poke-types";
  //Add to div types
  divPrincipal.appendChild(divTypes);

  //Finally, div container
  elements.results.appendChild(divPrincipal);
};

export const clearPokemon = () => {
  elements.results.innerHTML = "";
};
