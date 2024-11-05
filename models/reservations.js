module.exports = (sequelize, Sequelize) => {
  const Reservations = sequelize.define(
    "Reservations",
    {
      StartDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      EndDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      hasTrigger: true,
    }
  );
  return Reservations;
};
