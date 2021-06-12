const express = require("express");
const router = express.Router();

//Import contrllers
const categoriesController = require("../controllers/categories-controller");

//HTTP Rotues
router.post("/", categoriesController.addCategory);
router.get("/", categoriesController.getCategories);
router.get("/:id", categoriesController.getCategoryByID)
router.patch("/:id", categoriesController.updateCategoryByID);
router.delete("/:id", categoriesController.deleteCategory);


module.exports = router;