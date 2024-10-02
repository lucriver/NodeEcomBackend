const express = require("express");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
