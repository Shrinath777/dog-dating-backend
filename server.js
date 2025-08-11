// server.js or index.js in backend
const express = require('express');
const connectDB = require('./config/db'); // if you have DB connection
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Test Route
app.get('/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
