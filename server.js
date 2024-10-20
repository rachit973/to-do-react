const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Simple route for testing
app.get('/', (req, res) => {
    res.send('Welcome to the To-Do List App API');
});

// Listen on Port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use('/api/tasks', taskRoutes);