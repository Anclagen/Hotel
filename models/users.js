module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(
    "Users",
    {
      FirstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      LastName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Users.associate = function (models) {
    Users.belongsToMany(models.Hotels, { through: models.Ratings });
    Users.belongsToMany(models.Rooms, { through: models.Reservations });
  };

  return Users;
};
