const axios = require("axios");

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults() {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.query.toLowerCase()}`);
      //console.log(response);
      this.data = response.data;
    } catch (error) {
      alert(`Type ${this.query} not found`);
    }
  }
}