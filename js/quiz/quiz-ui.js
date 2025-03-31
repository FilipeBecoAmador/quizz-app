const QuizUI = {
    elements: {
        question: document.getElementById('question'),
        options: document.getElementById('options'),
        quizName: document.getElementById('current-quiz-name'),
        progress: {
            current: document.getElementById('current-question'),
            total: document.getElementById('total-questions')
        },
        results: {
            container: document.getElementById('results'),
            score: document.getElementById('score'),
            total: document.getElementById('total-questions-result'),
            wrongAnswers: document.getElementById('wrong-answers')
        },
        quizContent: document.querySelector('.quiz-content')
    },

    displayQuestion: function(questionData, currentIndex, totalQuestions) {
        const questionTextElement = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const currentQuestionElement = document.getElementById('current-question');
        const totalQuestionsElement = document.getElementById('total-questions');
        const nextButton = document.getElementById('next-button');

        if (!questionTextElement || !optionsContainer || !currentQuestionElement || 
            !totalQuestionsElement || !nextButton) {
            throw new Error('Required quiz elements not found in the DOM');
        }

        questionTextElement.textContent = questionData.text || questionData.question;
        optionsContainer.innerHTML = '';

        questionData.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            if (Array.isArray(questionData.correct)) {
                optionElement.classList.add('multiple-selection');
            }
            optionElement.textContent = option;
            optionElement.onclick = () => QuizManager.selectOption(index);
            optionsContainer.appendChild(optionElement);
        });

        currentQuestionElement.textContent = currentIndex + 1;
        totalQuestionsElement.textContent = totalQuestions;
        nextButton.disabled = true;

        if (QuizManager.state.userAnswers[currentIndex]) {
            QuizManager.state.userAnswers[currentIndex].forEach(answerIndex => {
                optionsContainer.children[answerIndex].classList.add('selected');
            });
            nextButton.disabled = false;
        }
    },

    handleOptionClick: function(index) {
        const options = this.elements.options.getElementsByClassName('option');
        const question = QuizManager.state.currentQuestions[QuizManager.state.currentIndex];
        
        if (Array.isArray(question.correct)) {
            options[index].classList.toggle('selected');
        } else {
            Array.from(options).forEach(option => option.classList.remove('selected'));
            options[index].classList.add('selected');
        }
        
        QuizNavigation.updateNextButton(this.getSelectedIndices().length > 0);
    },

    getSelectedIndices: function() {
        const optionsContainer = document.getElementById('options-container');
        if (!optionsContainer) return [];
        
        const selectedIndices = [];
        const options = optionsContainer.getElementsByClassName('option');
        
        Array.from(options).forEach((option, index) => {
            if (option.classList.contains('selected')) {
                selectedIndices.push(index);
            }
        });
        
        return selectedIndices;
    },

    updateQuizName: function(name) {
        const quizNameElement = document.getElementById('quiz-name');
        if (quizNameElement) {
            quizNameElement.textContent = name;
        }
    },

    updateProgress: function(current, total) {
        this.elements.progress.current.textContent = current;
        this.elements.progress.total.textContent = total;
    },

    showResults: function(score, total, wrongAnswers) {
        this.elements.quizContent.style.display = 'none';
        this.elements.results.container.style.display = 'block';
        
        this.elements.results.score.textContent = score;
        this.elements.results.total.textContent = total;
        
        if (wrongAnswers.length > 0) {
            const wrongAnswersList = wrongAnswers.map(wrong => `
                <div class="wrong-answer-item">
                    <p><strong>Questão:</strong> ${wrong.question}</p>
                    <p><strong>Sua resposta:</strong> ${wrong.selectedAnswer}</p>
                    <p><strong>Resposta correta:</strong> ${wrong.correctAnswer}</p>
                </div>
            `).join('');
            
            this.elements.results.wrongAnswers.innerHTML = `
                <h3>Questões que você errou:</h3>
                ${wrongAnswersList}
            `;
        } else {
            this.elements.results.wrongAnswers.innerHTML = '<p>Parabéns! Você acertou todas as questões!</p>';
        }
    },

    selectOption: function(optionElement, isSelected) {
        if (isSelected) {
            optionElement.classList.add('selected');
        } else {
            optionElement.classList.remove('selected');
        }
    }
}; 