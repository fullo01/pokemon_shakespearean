# Welcome to the Pokemon Shakespearean API

This is an API that returns the description of a Pokemon in Shakespearean english. 

Simply pass the Pokemon's name as a param in http://localhost:3000/pokemon/POKEMON_NAME_HERE and a JSON object will be returned.

Note: Due to external API restrictions, only 5 requests per hour can be made.

# How to run 

## Via local NodeJS server

1. Clone repo

2. Install dependencies (from within cloned folder):

```console
$ npm install
```

3. Run server:

```console
$ node index.js
```

4. Visit http://localhost:3000/pokemon/:pokemonName

## Via Docker container

1. Clone repo

2. Build docker image (from within cloned folder):

```console
$ docker build -t your_dockerhub_username/pokemon_shakespearean .
```

3. Run image:

```console
$ docker run --name pokemon_shakespearean -p 3000:3000 -d your_dockerhub_username/pokemon_shakespearean
```

4. Visit http://localhost:3000/pokemon/:pokemonName
