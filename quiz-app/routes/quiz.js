const express = require('express');
const Quiz = require('../models/quiz');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Middleware to authenticate users
const authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  try {
    const payload = jwt.verify(token, 'secretkey');
    req.userId = payload.userId;
    next();
  } catch (err) {
    res.status(401).send('Unauthorized');
  }
};

// Create Quiz
router.post('/create', authenticate, async (req, res) => {
  const quiz = new Quiz(req.body);
  await quiz.save();
  res.status(201).send('Quiz Created');
});

// Add Quiz Question
router.post('/:id/questions', authenticate, async (req, res) => {
  const { question, options, correctAnswer } = req.body;
  const quiz = await Quiz.findById(req.params.id);
  
  if (!quiz) {
    return res.status(404).send('Quiz not found');
  }

  // Add the new question to the quiz
  quiz.questions.push({ question, options, correctAnswer });
  await quiz.save();
  res.status(201).send('Question added successfully');
});

// Get All Quizzes
router.get('/', authenticate, async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});

// Get Quiz Details
router.get('/:id', authenticate, async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  res.json(quiz);
});

// Take Quiz
router.post('/:id/submit', authenticate, async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  const { answers } = req.body;
  let score = 0;

  quiz.questions.forEach((q, index) => {
    if (q.correctAnswer === answers[index]) score++;
  });

  res.json({ score });
});

module.exports = router;
