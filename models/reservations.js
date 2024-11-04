module.exports = (sequelize, Sequelize) => {
  const Reservations = sequelize.define(
    "Reservations",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      startDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      // userId: {
      //   type: Sequelize.DataTypes.INTEGER,
      //   references: {
      //     model: "Users",
      //     key: "id",
      //   },
      //   allowNull: false,
      // },
      // roomId: {
      //   type: Sequelize.DataTypes.INTEGER,
      //   references: {
      //     model: "Rooms",
      //     key: "id",
      //   },
      //   allowNull: false,
      // },
    },
    {
      timestamps: false,
    }
  );
  return Reservations;
};
