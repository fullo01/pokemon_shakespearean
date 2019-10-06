const axios = require('axios');

class TranslatorService {

  async toShakespearean(text) {
    const response = await axios.post('https://api.funtranslations.com/translate/shakespeare', { text });
    return response.data;
  }
  
}

module.exports = new TranslatorService();