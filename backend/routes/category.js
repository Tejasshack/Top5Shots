// routes/categoryRoutes.js
const express = require("express");
const router = express.Router();
const { createCategory } = require("../controllers/category.controller");

router.post("/category", createCategory);

module.exports = router;
