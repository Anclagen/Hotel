module.exports = (sequelize, Sequelize) => {
  const Ratings = sequelize.define(
    "Ratings",
    {
      Rating: {
        type: Sequelize.DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Ratings;
};
