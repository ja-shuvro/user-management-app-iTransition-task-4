const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const sequelize = require("./config/database"); // Import your database connection
// const userRoutes = require("./routes/userRoutes"); // Import your user routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json()); // For parsing application/json

// Use user routes
// app.use("/api/users", userRoutes);

// Sync the database
const syncDatabase = async () => {
  try {
    await sequelize.sync();
    console.log("Database & tables created!");
    // Start the server after the database is synced
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

syncDatabase();
