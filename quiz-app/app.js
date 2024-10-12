const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

app.use(cors()); // Enable CORS for all routes

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/dbquiz', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const authRoutes = require('./routes/auth');
const quizRoutes = require('./routes/quiz');

app.use('/auth', authRoutes);
app.use('/quiz', quizRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
