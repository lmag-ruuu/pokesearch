import ico from "../images/pokeball.png";
export const elements = {
  searchForm: document.querySelector(".search"),
  searchField: document.querySelector(".search-field"),
  dataNames: document.getElementById("names"),
  results: document.querySelector(".results"),
  searchInput: document.querySelector(".search-input"),
  results: document.querySelector(".results"),
  resultCont: document.querySelector(".result-container"),
  title: document.querySelector(".title"),
};

export const colorTypes = {
  rock: "#b8a038",
  flying: "#a890f0",
  grass: "#78c850",
  psychic: "#f85888",
  ghost: "#705898",
  bug: "#a8b820",
  poison: "#a040a0",
  ground: "#e0c068",
  dragon: "#7038f8",
  steel: "#b8b8d0",
  fighting: "#c03028",
  fairy: "#F98CFF",
  dark: "#705848",
  electric: "#f8d030",
  normal: "#a8a878",
  fire: "#f08030",
  water: "#5884ef",
  ice: "#98d8d8",
};

//Add icon ad side search
const myIco = new Image();
myIco.src = ico;
myIco.style = "width:40px; height:40px;";
elements.title.appendChild(myIco);
