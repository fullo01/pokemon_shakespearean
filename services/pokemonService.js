const axios = require('axios');

class PokemonService {

  async getDetails(name) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
    return response.data;
  };

  filterEnglishDescriptions(pokemon) {
    return pokemon.flavor_text_entries.filter(descriptions => descriptions.language.name === 'en');
  }

}

module.exports = new PokemonService();