import { elements, colorTypes } from "./base";
import { types } from "../model/dictionary";
import { multiplierFuntion } from "../model/multiplier";

export const renderPokeData = (pokemon) => {
  //Create a container for show all pokemon data
  const divContainer = document.createElement("div");
  divContainer.className = "result-container";

  //Create First section
  const sectionPokeData = document.createElement("section");
  sectionPokeData.className = "content-img-type";

  //Create figure for img
  const figure = document.createElement("figure");
  //Add img
  const img = createImg(pokemon.img);

  //add img on figure
  figure.appendChild(img);

  //Add figure on section
  sectionPokeData.appendChild(figure);

  //create div for name and id
  const idAndName = document.createElement("div");
  //name
  const pokeName = putName(pokemon.name);
  //id
  const pokeId = putId(pokemon.id);
  //add on div
  idAndName.appendChild(pokeId);
  idAndName.appendChild(pokeName);
  //add on section
  sectionPokeData.appendChild(idAndName);

  //1st, get types
  let type = getTypes(pokemon.types);
  //Get defenses multiplier
  const mult = multiplierFuntion(type, types);
  console.log(mult);

  //Types
  // const divTypes = putTypes(pokemon.types);
  // sectionPokeData.appendChild(divTypes);

  //Items
  // const divItems = putItems(pokemon.items);
  // sectionPokeData.appendChild(divItems);

  elements.results.appendChild(sectionPokeData);

  //2º SECTION
  const sectionPokeStats = document.createElement("section");
  sectionPokeStats.className = "section2";

  //Div inside section
  const divColum = document.createElement("div");

  //table inside div
  const tableStat = document.createElement("table");

  //colgroup for table
  const colGrp = document.createElement("colgroup");
  colGrp.setAttribute("span", 2);
  colGrp.className = "columns";
  tableStat.appendChild(colGrp);

  //Fill table
  fillTable(tableStat, pokemon.stats);

  //Add table on divColum
  divColum.appendChild(tableStat);
  divColum.appendChild(document.createElement("br"));

  //fill abilities
  const divAbilities = document.createElement("div");
  divAbilities.textContent = `Abilities`;
  showAbilities(divAbilities, pokemon.abilities);

  //add abilites on colum
  divColum.appendChild(divAbilities);

  //add Colum on stats section
  sectionPokeStats.appendChild(divColum);

  //add new section on container
  elements.results.appendChild(sectionPokeStats);
};

export const createImg = (img) => {
  const divImg = document.createElement("img");
  divImg.setAttribute("src", img);
  return divImg;
};

export const putName = (namePoke) => {
  const divName = document.createElement("span");
  divName.className = "name";
  divName.textContent = namePoke;
  return divName;
};

export const putId = (pokeId) => {
  const divId = document.createElement("span");
  divId.className = "number";
  divId.textContent = `Nº ${pokeId} `;
  return divId;
};

export const putTypes = (types) => {
  console.log(types);
  const typeId = document.createElement("div");
  types.forEach((type) => {
    const typeText = document.createElement("span");
    typeText.style.backgroundColor = colorTypes[type.type.name];
    typeText.textContent = type.type.name;
    typeId.appendChild(typeText);
  });
  return typeId;
};

export const putItems = (items) => {
  const itemId = document.createElement("div");
  items.forEach((item) => {
    const itemText = document.createElement("div");
    itemText.textContent = item.item.name;
    itemId.appendChild(itemText);
  });
  return itemId;
};

const fillTable = (table, stats) => {
  stats.forEach((stat) => {
    const trow = document.createElement("tr");
    const thName = document.createElement("th");
    thName.textContent = stat.stat.name;
    const thStat = document.createElement("th");
    thStat.textContent = stat.base_stat;
    trow.appendChild(thName);
    trow.appendChild(thStat);
    table.appendChild(trow);
  });
};

const showAbilities = (div, ability) => {
  ability.forEach((ability) => {
    const ab = document.createElement("div");
    ab.textContent = ability.ability.name;
    div.appendChild(ab);
  });
};

//Get types
const getTypes = (typesPoke) => {
  const result = typesPoke.map((type) => type.type.name);
  return result;
};
