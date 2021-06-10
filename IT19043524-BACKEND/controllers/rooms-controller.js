const Room = require("../models/Room");

const addRoom = async (req, res, next) => {
    const createRoom = new Room({
        code: req.body.code,
        amount: req.body.amount,
        wing: req.body.wing,
        pax: req.body.pax,
        categories: req.body.categories
    });
    try{
        await createRoom.save();
        console.log("Data saved successfully");
    }catch(err){
        console.log("Failed to save data");
    }
    res.status(200).json({
        createRoom: createRoom
    });
}

const getRooms = async(req, res, next) => {
    let room;
    try{
        room = await Room.find();
        console.log("Data retrived successfully!");
    }catch(err){
        console.log("Failed to get data");
    }
    res.status(200).json({
        room: room
    })
}

const getRoomByCategory = async (req, res, next) => {
    let id = req.params.id;
    let room;
    try{
        room = await Room.findById(id).populate('categories');
        console.log(room)
    }catch(err){
        console.log(err);
    }
}

exports.addRoom = addRoom;
exports.getRooms = getRooms;
exports.getRoomByCategory = getRoomByCategory;