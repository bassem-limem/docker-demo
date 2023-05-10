const databaseName = process.env.MONGO_INITDB_DATABASE;
const userName = process.env.MONGO_INITDB_ROOT_USERNAME;
const passWord = process.env.MONGO_INITDB_ROOT_PASSWORD;

db = new Mongo().getDB(databaseName);

db.createUser({
  user: userName,
  pwd: passWord,
  roles: [
    {
      role: "readWrite",
      db: databaseName,
    },
  ],
});
db.createCollection("pokemons", { capped: false });

db.pokemons.insertOne({
  id: 1,
  name: "bulbizare",
  hp: 100,
  cp: 10,
  picture: "https://www.pokemontrash.com/pokedex/images/sugimori/001.png",
  types: ["feu", "test"],
});

db.pokemons.insertOne({
  id: 2,
  name: "Salamèche",
  hp: 28,
  cp: 6,
  picture: "https://www.pokemontrash.com/pokedex/images/sugimori/004.png",
  types: [
    "Feu"
  ],
  created: "2023-02-13T16:54:40.985Z"
});


db.pokemons.insertOne({
  id: 3,
  name: "Carapuce",
  hp: 21,
  cp: 4,
  picture: "https://www.pokemontrash.com/pokedex/images/sugimori/007.png",
  types: [
    "Eau"
  ],
  created: "2023-02-13T16:54:40.985Z"
});


db.pokemons.insertOne({
  id: 4,
  name: "Aspicot",
 hp: 16,
  cp: 2,
  picture: "https://www.pokemontrash.com/pokedex/images/sugimori/013.png",
  types: [
    "Insecte",
    "Poison"
  ],
  created: "2023-02-13T16:54:40.985Z"
});


db.pokemons.insertOne({
  id: 5,
  name: "Roucool",
 hp: 30,
  cp: 7,
  picture: "https://www.pokemontrash.com/pokedex/images/sugimori/016.png",
  types: [
    "Normal",
    "Vol"
  ],
  created: "2023-02-13T16:54:40.985Z"
});

db.pokemons.insertOne({
  id: 6,
  name: "Rattata",
 hp: 18,
  cp: 6,
  picture: "https://www.pokemontrash.com/pokedex/images/sugimori/019.png",
  types: [
    "Normal"
  ],
  created: "2023-02-13T16:54:40.985Z"
});

db.pokemons.insertOne({
  id: 7,
  name: "Piafabec",
 hp: 14,
  cp: 5,
  picture: "https://www.pokemontrash.com/pokedex/images/sugimori/021.png",
  types: [
    "Normal",
    "Vol"
  ],
  created: "2023-02-13T16:54:40.985Z"
});

db.pokemons.insertOne({
  id: 8,
  name: "Abo",
 hp: 16,
  cp: 4,
  picture: "https://www.pokemontrash.com/pokedex/images/sugimori/023.png",
  types: [
    "Poison"
  ],
  created: "2023-02-13T16:54:40.985Z"
});

db.pokemons.insertOne({
  id: 9,
  name: "Pikachu",
 hp: 21,
  cp: 7,
  picture: "https://www.pokemontrash.com/pokedex/images/sugimori/025.png",
  types: [
    "Electrik"
  ],
  created: "2023-02-13T16:54:40.985Z"
});

db.pokemons.insertOne({
  id: 10,
  name: "Sabelette",
 hp: 19,
  cp: 3,
  picture: "https://www.pokemontrash.com/pokedex/images/sugimori/027.png",
  types: [
    "Normal"
  ],
  created: "2023-02-13T16:54:40.985Z"
});

db.pokemons.insertOne({
  id: 11,
  name: "Mélofée",
 hp: 25,
  cp: 5,
  picture: "https://www.pokemontrash.com/pokedex/images/sugimori/035.png",
  types: [
    "Fée"
  ],
  created: "2023-02-13T16:54:40.985Z"
});

db.pokemons.insertOne({
  id: 12,
  name: "Groupix",
 hp: 17,
  cp: 8,
  picture: "https://www.pokemontrash.com/pokedex/images/sugimori/037.png",
  types: [
    "Feu"
  ],
  created: "2023-02-13T16:54:40.985Z"
});