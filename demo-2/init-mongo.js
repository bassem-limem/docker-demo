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
  picture: "/assest/tests",
  types: ["feu", "test"],
});
