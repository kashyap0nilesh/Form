const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Endpoint to handle POST requests
router.post('/', async (req, res) => {
  try {
    console.log('Form data received:', req.body); // Log received data for debugging
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    console.error('Error saving student:', err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
