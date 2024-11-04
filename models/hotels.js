module.exports = (sequelize, Sequelize) => {
  const Hotels = sequelize.define(
    "Hotels",
    {
      Name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      Location: {
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
