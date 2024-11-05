var express = require("express");
var router = express.Router();
var HotelService = require("../services/HotelService");
var db = require("../models");
var hotelService = new HotelService(db);

/* GET hotels listing. */
router.get("/", async function (req, res, next) {
  const hotels = await hotelService.get();
  res.render("hotels", { title: "Hotels", hotels: hotels });
});

router.get("/:hotelId", async function (req, res, next) {
  const hotel = await hotelService.getHotelDetails(req.params.hotelId);
  res.render("hotelDetails", { hotel: hotel });
});

router.post("/", async function (req, res, next) {
  try {
    let Name = req.body.Name;
    let Location = req.body.Location;
    const response = await hotelService.create(Name, Location);
    console.log(response);
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.send(e).status(400).end();
  }
});

router.post("/:hotelId/rate", async function (req, res, next) {
  let value = req.body.Value;
  await hotelService.makeARate(1, req.params.hotelId, value);
  res.end();
});

router.delete("/", async function (req, res, next) {
  try {
    let id = req.body.id;
    console.log(req.body);
    await hotelService.deleteHotel(id);
    res.status(204).end();
  } catch (e) {
    console.log(e);
    res.send(e).status(400).end();
  }
});

module.exports = router;
