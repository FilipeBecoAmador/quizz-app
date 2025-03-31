const QuizManager = {
    state: {
        questions: [],
        currentIndex: 0,
        score: 0,
        userAnswers: [],
        wrongAnswers: [],
        quizName: ''
    },

    init: function(questions, quizName) {
        if (!questions || questions.length === 0) {
            throw new Error('No questions provided');
        }

        this.resetState();
        this.state.questions = questions;
        this.state.quizName = quizName;
        this.state.userAnswers = new Array(questions.length).fill().map(() => []);
        
        this.showCurrentQuestion();
        QuizUI.updateQuizName(quizName);
    },

    selectOption: function(index) {
        const currentQuestion = this.state.questions[this.state.currentIndex];
        const currentAnswers = this.state.userAnswers[this.state.currentIndex];
        const optionsContainer = document.getElementById('options-container');
        const options = optionsContainer.getElementsByClassName('option');
        
        if (Array.isArray(currentQuestion.correct)) {
            const answerIndex = currentAnswers.indexOf(index);
            if (answerIndex === -1) {
                currentAnswers.push(index);
                options[index].classList.add('selected');
            } else {
                currentAnswers.splice(answerIndex, 1);
                options[index].classList.remove('selected');
            }
        } else {
            currentAnswers.length = 0;
            currentAnswers.push(index);
            
            Array.from(options).forEach((option, i) => {
                option.classList.toggle('selected', i === index);
            });
        }

        document.getElementById('next-button').disabled = currentAnswers.length === 0;
    },

    showCurrentQuestion: function() {
        const currentQuestion = this.state.questions[this.state.currentIndex];
        if (!currentQuestion) {
            throw new Error('Question not found');
        }
        
        QuizUI.displayQuestion(
            currentQuestion,
            this.state.currentIndex,
            this.state.questions.length
        );

        QuizNavigation.updateButtons(this.state);
    },

    navigateToNext: function() {
        const currentAnswers = this.state.userAnswers[this.state.currentIndex];
        
        if (!currentAnswers || currentAnswers.length === 0) return;

        if (this.state.currentIndex < this.state.questions.length - 1) {
            this.state.currentIndex++;
            this.showCurrentQuestion();
        } else {
            this.showResults();
        }
    },

    navigateToPrevious: function() {
        if (this.state.currentIndex > 0) {
            this.state.currentIndex--;
            this.showCurrentQuestion();
        }
    },

    showResults: function() {
        this.calculateScore();

        document.querySelector('.question').style.display = 'none';
        document.querySelector('.options').style.display = 'none';
        document.querySelector('.quiz-buttons').style.display = 'none';
        document.querySelector('.progress-bar').style.display = 'none';

        const resultsSection = document.getElementById('results-section');
        resultsSection.style.display = 'block';

        document.getElementById('final-score').textContent = this.state.score;
        document.getElementById('total-questions-score').textContent = this.state.questions.length;

        const wrongAnswersContainer = document.getElementById('wrong-answers');
        wrongAnswersContainer.innerHTML = this.state.wrongAnswers.length > 0 
            ? this.state.wrongAnswers.map((wrong, index) => `
                <div class="wrong-answer-item">
                    <p><strong>Questão ${index + 1}:</strong> ${wrong.question}</p>
                    <p><strong>Sua resposta:</strong> ${Array.isArray(wrong.userAnswer) ? wrong.userAnswer.join(', ') : wrong.userAnswer}</p>
                    <p><strong>Resposta correta:</strong> ${Array.isArray(wrong.correctAnswer) ? wrong.correctAnswer.join(', ') : wrong.correctAnswer}</p>
                </div>
            `).join('')
            : '<p>Parabéns! Você acertou todas as questões!</p>';

        document.getElementById('return-home').onclick = () => App.showHome();
    },

    calculateScore: function() {
        this.state.score = 0;
        this.state.wrongAnswers = [];

        this.state.questions.forEach((question, index) => {
            const userAnswer = this.state.userAnswers[index];
            const correctAnswer = question.correct;

            if (Array.isArray(correctAnswer)) {
                if (this.arraysEqual(userAnswer.sort(), correctAnswer.sort())) {
                    this.state.score++;
                } else {
                    this.state.wrongAnswers.push({
                        question: question.text || question.question,
                        userAnswer: userAnswer.map(i => question.options[i]),
                        correctAnswer: correctAnswer.map(i => question.options[i])
                    });
                }
            } else {
                if (userAnswer[0] === correctAnswer) {
                    this.state.score++;
                } else {
                    this.state.wrongAnswers.push({
                        question: question.text || question.question,
                        userAnswer: question.options[userAnswer[0]],
                        correctAnswer: question.options[correctAnswer]
                    });
                }
            }
        });
    },

    resetState: function() {
        Object.assign(this.state, {
            questions: [],
            currentIndex: 0,
            score: 0,
            userAnswers: [],
            wrongAnswers: [],
            quizName: ''
        });
    },

    arraysEqual: function(a, b) {
        return a.length === b.length && a.every((val, index) => val === b[index]);
    }
}; 