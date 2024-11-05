const { sequelize } = require("../models");

class RoomsService {
  constructor(db) {
    this.client = db.sequelize;
    this.Rooms = db.Rooms;
    this.Reservations = db.Reservations;
  }

  async create(capacity, price, hotelId) {
    return this.Rooms.create({
      Capacity: capacity,
      Price: price,
      HotelId: hotelId,
    });
  }

  async get() {
    return this.Rooms.findAll({
      where: {},
    });
  }

  async getHotelRooms(hotelId) {
    return this.Rooms.findAll({
      where: {
        HotelId: hotelId,
      },
    });
  }

  async rentARoom(userId, roomId, startDate, endDate) {
    sequelize
      .query("CALL insert_reservation(:UserId, :RoomId, :StartDate, :EndDate)", {
        replacements: {
          RoomId: roomId,
          UserId: userId,
          StartDate: startDate,
          EndDate: endDate,
        },
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  async deleteRoom(roomId) {
    return this.Rooms.destroy({
      where: { id: roomId },
    });
  }
}
module.exports = RoomsService;
