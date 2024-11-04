module.exports = (sequelize, Sequelize) => {
  const Hotels = sequelize.define(
    "Hotels",
    {
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
    },
    {
      timestamps: false,
    }
  );

  Hotels.associate = function (models) {
    Hotels.hasMany(models.Rooms);
    Hotels.belongsToMany(models.Users, { through: models.Ratings });
  };

  return Hotels;
};
