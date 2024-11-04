class HotelService {
  constructor(db) {
    this.client = db.sequelize;
    this.Hotels = db.Hotels;
    console.log(db);
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

  async deleteHotel(hotelId) {
    return this.Hotels.destroy({
      where: { id: hotelId },
    });
  }
}
module.exports = HotelService;
