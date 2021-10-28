import { elements, colorTypes } from "./base";
import { types } from "../model/dictionary";
import { multiplierFuntion } from "../model/multiplier";

export const renderPokeData = (pokemon) => {
  //Create a container for show all pokemon data
  const divContainer = document.createElement("div");
  divContainer.className = "result-allData";

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
  // console.log(`type pokemon ${type}`);
  //Get defenses multiplier
  const mult = multiplierFuntion(type, types);
  // console.log(mult);

  //Lets create table
  const table = renderTable(type, mult);
  sectionPokeData.appendChild(table);

  divContainer.appendChild(sectionPokeData);

  //2º SECTION////////////////////////////////////////////////////////////////////////
  const sectionPokeStats = document.createElement("section");
  sectionPokeStats.className = "content-stats";

  //Div inside section
  const divColum = document.createElement("div");

  //table inside div
  const tableStat = document.createElement("table");

  //Fill table
  fillTable(tableStat, pokemon.stats);

  //Add table on divColum
  divColum.appendChild(tableStat);

  //fill abilities
  const abil = getAbility(pokemon.abilities);
  const abTable = getAbTable(abil);

  //add abilites on colum
  divColum.appendChild(abTable);

  //Items
  if (pokemon.items.length > 0) {
    const tableItems = putItems(pokemon.items);
    divColum.appendChild(tableItems);
  }

  //add Colum on stats section
  sectionPokeStats.appendChild(divColum);

  divContainer.appendChild(sectionPokeStats);

  //add new section on container
  elements.resultCont.appendChild(divContainer);
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
  // console.log(types);
  const typeId = document.createElement("div");
  types.forEach((type) => {
    const typeText = document.createElement("span");
    typeText.style.backgroundColor = colorTypes[type];
    typeText.textContent = type;
    typeId.appendChild(typeText);
  });
  return typeId;
};

export const putItems = (items) => {
  const itemTable = document.createElement("table");
  const itemTr = document.createElement("tr");
  const itemTh = document.createElement("th");
  itemTh.textContent = "Held Items";
  itemTr.appendChild(itemTh);
  items.forEach((item) => {
    const itemTd = document.createElement("td");
    itemTd.textContent = item.item.name;
    itemTr.appendChild(itemTd);
  });
  itemTable.appendChild(itemTr);
  return itemTable;
};
//Get types
export const getTypes = (typesPoke) => {
  const result = typesPoke.map((type) => type.type.name);
  return result;
};

const fillTable = (table, stats) => {
  stats.forEach((stat) => {
    // console.log(stat);
    const trow = document.createElement("tr");
    const thName = document.createElement("th");
    thName.textContent = stat.stat.name;
    const thStat = document.createElement("td");
    const spanStat = document.createElement("span");
    spanStat.textContent = stat.base_stat;
    const color = getColor(stat.base_stat);
    spanStat.style.backgroundColor = color;
    spanStat.style.paddingRight = `${stat.base_stat}px`;
    thStat.appendChild(spanStat);

    trow.appendChild(thName);
    trow.appendChild(thStat);
    table.appendChild(trow);
  });
};

const getColor = (stat) => {
  // console.log(stat);
  let color;
  if (stat >= 120) {
    color = "#38d9a9";
    return color;
  } else if (stat >= 90) {
    color = "#a9e34b";
    return color;
  } else if (stat >= 60) {
    color = "#ffd43b";
    return color;
  } else {
    color = "#ff8787";
    return color;
  }
};

const getAbility = (ability) => {
  const ab = [];
  ability.forEach((abi) => ab.push(abi.ability.name));
  return ab;
};

//create table weakness and type
const renderTable = (types, multi) => {
  //First, create table
  const table = document.createElement("table");
  table.className = "defense-table";
  //Create tr for types
  const trType = document.createElement("tr");
  const thType = document.createElement("th");
  thType.textContent = "Type";
  const tdType = document.createElement("td");
  const typeData = putTypes(types);
  tdType.appendChild(typeData);
  trType.appendChild(thType);
  trType.appendChild(tdType);
  table.appendChild(trType);
  /////////////////////////////////////////////////////////
  //inmune?
  if (multi.inmune) {
    const trImmune = giveMeTableRow("Inmune to", multi.inmune);
    table.appendChild(trImmune);
  }
  //Strongly resist
  if (multi.strongly) {
    const trStrongly = giveMeTableRow("Strongly resist", multi.strongly);
    table.appendChild(trStrongly);
  }
  //just resist
  if (multi.resists) {
    const trResist = giveMeTableRow("Resist", multi.resists);
    table.appendChild(trResist);
  }
  //just resist
  if (multi.weak) {
    const trWeak = giveMeTableRow("Weak", multi.weak);
    table.appendChild(trWeak);
  }
  //just resist
  if (multi.veryWeak) {
    const trVeryWeak = giveMeTableRow("Very Weak to", multi.veryWeak);
    table.appendChild(trVeryWeak);
  }

  return table;
};

const giveMeTableRow = (element, value) => {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = element;
  tr.appendChild(th);
  const td = document.createElement("td");
  const tdData = putTypes(value);
  td.appendChild(tdData);
  tr.appendChild(td);

  return tr;
};

const getAbTable = (ab) => {
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = "Abilities:";
  tr.appendChild(th);
  ab.forEach((ability) => {
    const td = document.createElement("td");
    td.textContent = ability;
    tr.appendChild(td);
  });
  table.appendChild(tr);
  return table;
};
