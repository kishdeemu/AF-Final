//Imports the mongoose model
const Room = require("../models/Room");

//Add room data
const addRoom = async (req, res, next) => {
    const createRoom = new Room({
        code: req.body.code,
        amount: req.body.amount,
        wing: req.body.wing,
        pax: req.body.pax,
        categories: req.body.categories
    });
    try{
        await createRoom.save(); //Saves room data to DB
        console.log("Data saved successfully");
    }catch(err){
        console.log("Failed to save data");
    }
    //Sends response to the frontend
    res.status(200).json({
        createRoom: createRoom
    });
}

//Get all room details from DB
const getRooms = async(req, res, next) => {
    let room;
    try{
        room = await Room.find().populate('categories', "name");//populates category details into room details
        console.log("Data retrived successfully!");
    }catch(err){
        console.log("Failed to get data");
    }
    //Sends response to the frontend
    res.status(200).json({
        room: room
    })
}

//exports the function so it can be used by other files.
exports.addRoom = addRoom;
exports.getRooms = getRooms;