import ico from "../images/pokeball.png";
export const elements = {
  searchForm: document.querySelector(".search"),
  searchField: document.querySelector(".search-field"),
  dataNames: document.getElementById("names"),
  results: document.querySelector(".results"),
  searchInput: document.querySelector(".search-input"),
  results: document.querySelector(".results"),
  title: document.querySelector(".title"),
};

export const colorTypes = {
  rock: "#999799",
  flying: "#7AE7C7",
  grass: "#4A9681",
  psychic: "#FFC6D9",
  ghost: "#561D25",
  bug: "#A2FAA3",
  poison: "#7e009e",
  ground: "#D2B074",
  dragon: "#DA627D",
  steel: "#1D8A99",
  fighting: "#2F2F2F",
  fairy: "#FFD2D2",
  dark: "#2F2F2F",
  electric: "#F2EB00",
  normal: "#B09398",
  fire: "#FF675C",
  water: "#0596C7",
  ice: "#AFEAFD",
  default: "#2A1A1F",
};

//Add icon ad side search
const myIco = new Image();
myIco.src = ico;
myIco.style = "width:40px; height:40px;";
elements.title.appendChild(myIco);
