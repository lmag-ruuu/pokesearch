import { elements, colorTypes } from "./base";

export const renderPokeData = (pokemon) => {
  //First section
  const sectionPokeData = document.createElement("section");
  sectionPokeData.className = 'section1';

  //Img container
  const divImgC = document.createElement("div");

  //Add img
  const img = createImg(pokemon.img);
  //Style to img
  createStyle(img, pokemon.types);

  //add on section
  divImgC.appendChild(img);
  sectionPokeData.appendChild(divImgC);

  //the name
  const pokeName = putName(pokemon.name);
  sectionPokeData.appendChild(pokeName);

  //Put the id
  const pokeId = putId(pokemon.id);
  sectionPokeData.appendChild(pokeId);

  //Types
  const divTypes = putTypes(pokemon.types);
  sectionPokeData.appendChild(divTypes);

  //Items
  const divItems = putItems(pokemon.items);
  sectionPokeData.appendChild(divItems);

  elements.container.appendChild(sectionPokeData);

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
  divColum.appendChild(document.createElement('br'));

  //fill abilities
  const divAbilities = document.createElement("div");
  divAbilities.textContent = `Abilities`;
  showAbilities(divAbilities, pokemon.abilities);

  //add abilites on colum
  divColum.appendChild(divAbilities);

  //add Colum on stats section
  sectionPokeStats.appendChild(divColum);

  //add new section on container
  elements.container.appendChild(sectionPokeStats);
};

export const createImg = (img) => {
  const divImg = document.createElement("img");
  divImg.className = "poke-img";
  divImg.setAttribute("src", img);
  return divImg;
};

export const createStyle = (img, types) => {
  const colorOne = colorTypes[types[0].type.name];
  const colorTwo = types[1]
    ? colorTypes[types[1].type.name]
    : colorTypes.default;
  img.style.background = `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
  img.style.backgroundSize = " 5px 5px";
};

export const putName = (namePoke) => {
  const divName = document.createElement("div");
  divName.textContent = namePoke;
  return divName;
};

export const putId = (pokeId) => {
  const divId = document.createElement("div");
  divId.textContent = `Nº ${pokeId} `;
  return divId;
};

export const putTypes = (types) => {
  const typeId = document.createElement("div");
  types.forEach((type) => {
    const typeText = document.createElement("div");
    typeText.style.textShadow = "2px 2px 2px black";
    typeText.style.color = colorTypes[type.type.name];
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
    const ab = document.createElement('div');
    ab.textContent = ability.ability.name;
    div.appendChild(ab);
  });
};
