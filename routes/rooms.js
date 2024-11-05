var express = require("express");
var router = express.Router();
var RoomsService = require("../services/RoomsService");
var db = require("../models");
var roomsService = new RoomsService(db);
/* GET rooms listing. */
router.get("/:hotelId", async function (req, res, next) {
  const rooms = await roomsService.getHotelRooms(req.params.hotelId);
  res.render("rooms", { rooms: rooms });
});

router.get("/", async function (req, res, next) {
  const rooms = await roomsService.get();
  res.render("rooms", { rooms: rooms });
});

router.post("/", async function (req, res, next) {
  let Capacity = req.body.Capacity;
  let Price = req.body.Price;
  let HotelId = req.body.HotelId;
  await roomsService.create(Capacity, Price, HotelId);
  res.end();
});

router.post("/reservation", async function (req, res, next) {
  let userId = req.body.UserId;
  let roomId = req.body.RoomId;
  let startDate = req.body.StartDate;
  let endDate = req.body.EndDate;
  await roomsService.rentARoom(userId, roomId, startDate, endDate);
  res.end();
});

router.delete("/", async function (req, res, next) {
  let id = req.body.id;
  await roomsService.deleteRoom(id);
  res.end();
});

module.exports = router;
