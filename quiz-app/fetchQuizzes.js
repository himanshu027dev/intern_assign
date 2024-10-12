const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fetchQuizzes = async () => {
  try {
    const token = '';//'your_token_here'; 
    const response = await axios.get('http://localhost:3000/quiz/', {
      headers: {
        Authorization: token
      }
    });

    const quizzes = response.data;

    console.log('Quizzes Retrieved:');
    
    for (const quiz of quizzes) {
      console.log(`\nQuiz: ${quiz.title}`);
      
      for (const question of quiz.questions) {
        console.log(`Q: ${question.question}`);
        question.options.forEach((option, index) => {
          console.log(`  ${index + 1}: ${option}`);
        });

        // Wait for user's answer
        const isCorrect = await new Promise((resolve) => {
          rl.question('Your answer (enter the option number): ', (answer) => {
            const selectedOption = parseInt(answer) - 1;
            console.log(`Debug: Selected Option Index: ${selectedOption}, Correct Answer Index: ${question.correctAnswer}`); // Debug line

            if (selectedOption === question.correctAnswer) {
              console.log('Correct!');
              resolve(true);
            } else {
              console.log(`Wrong! The correct answer was: ${question.options[question.correctAnswer]}`);
              resolve(false);
            }
          });
        });
      }
    }

    rl.close(); // Close the readline interface after answering all questions

  } catch (error) {
    console.error('Error fetching quizzes:', error.response ? error.response.data : error.message);
  }
};

fetchQuizzes();
