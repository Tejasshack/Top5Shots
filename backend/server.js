const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blog");
const webstieComparison = require("./routes/comparison");
const category = require("./routes/category");
const tag = require("./routes/tag")
app.use(cors());

app.use(express.json());
app.use(authRoutes);
app.use(blogRoutes);
app.use(webstieComparison);
app.use(category);
app.use(tag)

// Database Connection
const databaseConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.error(" Database Connection Failed", error);
    process.exit(1);
  }
};

databaseConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
  });
});
