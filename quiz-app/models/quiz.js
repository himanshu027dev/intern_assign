const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: Number // Index of correct option
    }
  ]
});

module.exports = mongoose.model('Quiz', quizSchema);
