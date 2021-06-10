const Category = require("../models/Category");

const addCategory = async (req, res, next) => {
    const createCategory = new Category({
        name: req.body.name,
        description: req.body.description,
        rooms: req.body.rooms
    });
    try{
        await createCategory.save();
        console.log("Data saved succesfully!");
    }catch(err){
        console.log("ERROR: Data cannot save");
    }
    res.status(200).json({
        category: createCategory
    })
}

const getCategories = async (req, res, next) => {
    let category;
    try{
        category = await Category.find();
        console.log("Data retrieved successfully!!!");
    }catch(err){
        console.log("Cannot retrieve data!!!");
    }
    res.status(200).json({
        category: category
    })
}

exports.addCategory = addCategory;
exports.getCategories = getCategories;