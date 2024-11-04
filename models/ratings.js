module.exports = (sequelize, Sequelize) => {
  const Reservations = sequelize.define(
    "Reservations",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      rating: {
        type: Sequelize.DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
        allowNull: false,
      },
      // Alternate approach to relations
      // userId: {
      //   type: Sequelize.DataTypes.INTEGER,
      //   references: {
      //     model: "Users",
      //     key: "id",
      //   },
      //   allowNull: false,
      // },
      // hotelId: {
      //   type: Sequelize.DataTypes.INTEGER,
      //   references: {
      //     model: "Hotels",
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
