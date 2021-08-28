export default class Pokemon {
  constructor (data){
    this.abilities = data.abilities;
    this.name = data.name;
    this.img = data.sprites.front_default;
    this.stats = data.stats;
    this.types = data.types;
    this.id = data.id;
    this.items = data.held_items;
  }
};