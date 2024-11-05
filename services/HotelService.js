class HotelService {
  constructor(db) {
    this.client = db.sequelize;
    this.Hotels = db.Hotels;
    this.Rating = db.Ratings;
    this.Users = db.Users;
  }

  async create(name, location) {
    return this.Hotels.create({
      Name: name,
      Location: location,
    });
  }

  async get() {
    return this.Hotels.findAll({
      where: {},
    });
  }

  async getHotelDetails(hotelId) {
    const hotel = await this.Hotels.findOne({
      where: {
        id: hotelId,
      },
      include: {
        model: this.Users,
        through: {
          attributes: ["Rating"],
        },
      },
    });
    hotel.avg = hotel.Users.map((x) => x.Ratings.dataValues.Rating).reduce((a, b) => a + b, 0) / hotel.Users.length;
    hotel.rated = hotel.Users.filter((x) => x.dataValues.id == 1).length > 0;
    return hotel;
  }

  async makeARate(userId, hotelId, value) {
    return this.Rating.create({
      UserId: userId,
      HotelId: hotelId,
      Rating: value,
    });
  }

  async deleteHotel(hotelId) {
    return this.Hotels.destroy({
      where: { id: hotelId },
    });
  }
}
module.exports = HotelService;
