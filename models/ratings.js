module.exports = (sequelize, Sequelize) => {
  const Reservations = sequelize.define("Reservations", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rating: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      allowNull: false,
    },
    hotelId: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: "Hotels",
        key: "id",
      },
      allowNull: false,
    },
  });
  return Reservations;
};
