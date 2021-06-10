const express = require("express");
const router = express.Router();

//Import contrllers
const roomsController = require("../controllers/rooms-controller");

//HTTP Rotues
router.post("/", roomsController.addRoom);
router.get("/:id", roomsController.getRoomByCategory);
router.get("/", roomsController.getRooms);

module.exports = router;