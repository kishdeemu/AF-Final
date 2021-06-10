const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    code: {type: String, required: true},
    amount: {type: Number, required: true}, 
    wing: {type: String, required: true},
    pax: {type: Number, required: true},
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
});

module.exports = mongoose.model("Room", roomSchema);
