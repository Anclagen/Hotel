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
db.hotels = require("./hotels.js")(sequelize, Sequelize);
db.rooms = require("./rooms.js")(sequelize, Sequelize);
db.users = require("./users.js")(sequelize, Sequelize);
db.reservations = require("./reservations.js")(sequelize, Sequelize);
db.ratings = require("./ratings.js")(sequelize, Sequelize);
sequelize.sync({ alter: true });
module.exports = db;
