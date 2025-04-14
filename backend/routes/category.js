// routes/categoryRoutes.js
const express = require("express");
const router = express.Router();
const { createCategory,getCategory } = require("../controllers/category.controller");


router.get("/category", getCategory)



router.post("/category", createCategory);

module.exports = router;
