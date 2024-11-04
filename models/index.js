const fs = require("fs");
const path = require("path");

const Sequelize = require("sequelize");
const db = {};

const connection = {
  dialect: process.env.DIALECT,
  dialectModel: process.env.DIALECTMODEL,
  database: process.env.DBNAME,
  username: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  host: process.env.HOST,
};

// connect to db
const sequelize = new Sequelize(connection);

db.sequelize = sequelize;

const basename = path.basename(__filename);
fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
    console.log(db);
  });

// Adds relationships based on those defined in the models associates
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// db.hotels = require("./hotels.js")(sequelize, Sequelize);
// db.users = require("./users.js")(sequelize, Sequelize);
// db.ratings = require("./ratings.js")(sequelize, Sequelize);
// db.rooms = require("./rooms.js")(sequelize, Sequelize);
// db.reservations = require("./reservations.js")(sequelize, Sequelize);

sequelize.sync({ alter: true });
module.exports = db;
