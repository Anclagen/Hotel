module.exports = (sequelize, Sequelize) => {
  const Rooms = sequelize.define(
    "Rooms",
    {
      Capacity: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      Price: {
        type: Sequelize.DataTypes.DECIMAL(11, 2),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Rooms.associate = function (models) {
    Rooms.belongsTo(models.Hotels);
    Rooms.belongsToMany(models.Users, { through: models.Reservations });
  };
  return Rooms;
};
