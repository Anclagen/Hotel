module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(
    "Users",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      password: {
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
