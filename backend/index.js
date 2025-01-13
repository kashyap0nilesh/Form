const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/Routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Use the student routes
app.use('/api/students', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
