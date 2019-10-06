const TranslatorService = require('../services/translatorService');
const PokemonService = require('../services/pokemonService');

module.exports = async function (req, res) {
  try {
    const requestedPokemon = req.params.pokemonName.toLowerCase();
    const pokemonDetails = await PokemonService.getDetails(requestedPokemon);
  
    const pokemonDescriptionsEnglish = PokemonService.filterEnglishDescriptions(pokemonDetails);
    const randomEnglishDescription = pokemonDescriptionsEnglish[Math.ceil(Math.random() * pokemonDescriptionsEnglish.length)].flavor_text;
    const shakespeareanTranslation = await TranslatorService.toShakespearean(randomEnglishDescription);
    
    res.send({ name: requestedPokemon, description: shakespeareanTranslation.contents.translated });
  } catch (error) {
    console.log(error)
    res.status(error.response.status);
    res.send({ error: error.response.statusText});
  }
};