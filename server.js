// server.js
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const imageRoute = require('./routes/image');

const app = express();
const port = 5000;

// Connect to MongoDB
connectDB();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/uploads', express.static('uploads'))

// Serve uploaded files
app.use('/images', imageRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
