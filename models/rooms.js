module.exports = (sequelize, Sequelize) => {
  const Rooms = sequelize.define("Rooms", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    capacity: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: Sequelize.DataTypes.DECIMAL(11, 2),
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
  return Rooms;
};
