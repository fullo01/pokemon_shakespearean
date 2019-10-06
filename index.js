const express = require('express');
const app = express();
const pokemonRoute = require('./routes/pokemonRoute');
const port = 3000;

app.get('/pokemon/:pokemonName', pokemonRoute);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;