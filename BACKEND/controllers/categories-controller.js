//Imports the mongoose model
const Category = require("../models/Category");

//Add Category details to the database
const addCategory = async (req, res, next) => {
    const createCategory = new Category({
        name: req.body.name,
        description: req.body.description,
        rooms: req.body.rooms
    });
    try{
        await createCategory.save(); //saves data to DB
        console.log("Data saved succesfully!");
    }catch(err){
        console.log("ERROR: Data cannot save");
    }
    //Sends response to the frontend
    res.status(200).json({
        createCategory
    })
}

//Get all category data from database
const getCategories = async (req, res, next) => {
    let category;
    try{
        category = await Category.find().populate('rooms', "code amount wing"); //populate functions fill the 'rooms' with room data from 'rooms' collection
        console.log("Data retrieved successfully!!!");
    }catch(err){
        console.log("Cannot retrieve data!!!");
    }
    //Sends response to the frontend
    res.status(200).json({
        category
    })
}

//Update category by category ID and room details
const updateCategoryByID = async (req, res, next) => {
    let category;
    try{
        category = await Category.findById(req.params.id);
        category.rooms = category.rooms.concat(req.body.rooms); //Merge new room details with old room details
        console.log(category)
    }catch(err){
        console.log("Cannot update data!!!");
    }
    try{
        await category.save(); //saves the newly created data to DB
        console.log("Updated data successfully!!!")
    }catch(err){
        console.log("cannot update data");
    }
    //Sends response to the frontend
    res.status(200).json({
        category
    })
}

//Get category data by category ID
const getCategoryByID = async (req, res, next) => {
    let category;
    try{
        category = await Category.findById(req.params.id); //Finds data by category ID which passes via 'id" path variable
        console.log("Data retrived successfully!!!");
    }catch(err){
        console.log("Cannot retrieve data!!!");
    }
    //Sends response to the frontend
    res.status(200).json({
        category
    });
    
}

//Delete category data by ID
const deleteCategory = async (req, res, next) => {
    try{
        await Category.findByIdAndDelete(req.params.id); //Finds the data by ID and deletes it
        console.log("Data deleted successfully!!!");
    }catch(err){
        console.log("Cannot delete data!!!");
    }
    //Sends response to the frontend
    res.status(200).json({
        message: "Deleted"
    })
}

//exports the function so it can be used by other files.
exports.addCategory = addCategory;
exports.getCategories = getCategories;
exports.updateCategoryByID = updateCategoryByID;
exports.getCategoryByID = getCategoryByID;
exports.deleteCategory = deleteCategory;