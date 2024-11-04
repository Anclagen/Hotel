module.exports = (sequelize, Sequelize) => {
  const Hotels = sequelize.define("Hotels", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  });
  return Hotels;
};
