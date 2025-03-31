class Quiz {
    constructor(questions, name) {
        this.questions = questions;
        this.name = name;
        this.currentIndex = 0;
        this.score = 0;
        this.wrongAnswers = [];
    }

    getCurrentQuestion() {
        return this.questions[this.currentIndex];
    }

    checkAnswer(selectedIndices) {
        const question = this.getCurrentQuestion();
        const correct = Array.isArray(question.correct) ? 
            this.arraysEqual(selectedIndices.sort(), question.correct.sort()) :
            selectedIndices[0] === question.correct;

        if (!correct) {
            this.wrongAnswers.push({
                question: question.question,
                selected: selectedIndices.map(i => question.options[i]).join(', '),
                correct: Array.isArray(question.correct) ?
                    question.correct.map(i => question.options[i]).join(', ') :
                    question.options[question.correct]
            });
        } else {
            this.score++;
        }

        return correct;
    }

    arraysEqual(a, b) {
        return a.length === b.length && 
            a.every((val, index) => val === b[index]);
    }

    nextQuestion() {
        this.currentIndex++;
        return this.currentIndex < this.questions.length;
    }

    getProgress() {
        return {
            current: this.currentIndex + 1,
            total: this.questions.length,
            score: this.score,
            wrongAnswers: this.wrongAnswers
        };
    }
}

let currentQuiz = null;

function startSelectedQuiz() {
    const select = document.getElementById('quiz-select');
    const quizName = select.value;
    
    if (!quizName) {
        alert('Please select a quiz');
        return;
    }

    const questions = manager.getQuestionnaire(quizName);
    currentQuiz = new Quiz(questions, quizName);
    
    document.getElementById('current-quiz-name').textContent = quizName;
    showScreen('quiz-screen');
    displayCurrentQuestion();
}

function displayCurrentQuestion() {
    const question = currentQuiz.getCurrentQuestion();
    const progress = currentQuiz.getProgress();
    
    document.getElementById('current-question').textContent = progress.current;
    document.getElementById('total-questions').textContent = progress.total;
    
    document.getElementById('question').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionElement);
    });
    
    document.getElementById('next-button').disabled = true;
}

function initQuiz(quizName, questions) {
    // If questions are provided directly, use them
    // Otherwise, use the default quiz
    if (questions) {
        currentQuestions = questions;
    } else {
        currentQuestions = questionnaires['Quiz Padrão'] || [];
    }
    
    if (currentQuestions.length === 0) {
        alert("Não há questões disponíveis!");
        return;
    }
    
    currentQuestionIndex = 0;
    score = 0;
    wrongAnswers = [];
    
    // Update quiz name if provided
    if (quizName) {
        document.getElementById('current-quiz-name').textContent = quizName;
    }
    
    // Show quiz screen
    showScreen('quiz-screen');
    
    // Reset display
    resultsElement.style.display = 'none';
    questionElement.style.display = 'block';
    optionsElement.style.display = 'block';
    nextButton.style.display = 'block';
    
    userAnswers = []; // Reset user answers
    showQuestion();
}

// Quiz state variables
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = [];
let userAnswers = [];

// DOM elements
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const resultsElement = document.getElementById('results');
const scoreElement = document.getElementById('score');
const wrongAnswersElement = document.getElementById('wrong-answers');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');

function handleFileImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            
            // Validate imported data
            if (!importedData.name || !Array.isArray(importedData.questions) || importedData.questions.length === 0) {
                throw new Error('Formato de arquivo inválido');
                return;
            }

            // Start quiz with imported data
            currentQuestions = importedData.questions;
            currentQuestionIndex = 0;
            score = 0;
            wrongAnswers = [];
            
            // Update quiz name and show quiz screen
            document.getElementById('current-quiz-name').textContent = importedData.name;
            showScreen('quiz-screen');
            
            // Reset display
            resultsElement.style.display = 'none';
            questionElement.style.display = 'block';
            optionsElement.style.display = 'block';
            nextButton.style.display = 'block';
            
            userAnswers = []; // Reset user answers
            showQuestion();
            
        } catch (error) {
            alert('Erro ao importar quiz: ' + error.message);
        }
    };
    reader.readAsText(file);
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (Array.isArray(question.correct)) {
            optionElement.classList.add('multiple-selection');
        }
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        optionsElement.appendChild(optionElement);
    });
    
    // Restore previous answers if they exist
    const previousSelections = userAnswers[currentQuestionIndex] || [];
    const options = optionsElement.getElementsByClassName('option');
    Array.from(options).forEach((option, index) => {
        if (previousSelections.includes(index)) {
            option.classList.add('selected');
        }
    });
    
    // Update navigation buttons
    updateNavigationButtons();
    
    // Update progress
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    totalQuestionsSpan.textContent = currentQuestions.length;
}

function selectOption(index) {
    const question = currentQuestions[currentQuestionIndex];
    const options = optionsElement.getElementsByClassName('option');
    
    if (Array.isArray(question.correct)) {
        options[index].classList.toggle('selected');
        // Store multiple selections
        userAnswers[currentQuestionIndex] = Array.from(options)
            .map((option, idx) => option.classList.contains('selected') ? idx : null)
            .filter(idx => idx !== null);
    } else {
        Array.from(options).forEach(option => option.classList.remove('selected'));
        options[index].classList.add('selected');
        // Store single selection
        userAnswers[currentQuestionIndex] = [index];
    }
    
    nextButton.disabled = !Array.from(options).some(option => option.classList.contains('selected'));
    updateNavigationButtons();
}

// Add function to update navigation buttons
function updateNavigationButtons() {
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = !userAnswers[currentQuestionIndex] || 
                         userAnswers[currentQuestionIndex].length === 0;
}

// Handle next button click
nextButton.addEventListener('click', () => {
    const selectedOptions = Array.from(optionsElement.getElementsByClassName('option'))
        .map((option, index) => option.classList.contains('selected') ? index : null)
        .filter(index => index !== null);
    
    // Store the answer if not already stored
    if (!userAnswers[currentQuestionIndex]) {
        userAnswers[currentQuestionIndex] = selectedOptions;
    }
    
    const question = currentQuestions[currentQuestionIndex];
    
    // Check if answer is correct
    if (Array.isArray(question.correct)) {
        const allCorrectSelected = question.correct.every(index => selectedOptions.includes(index));
        const noIncorrectSelected = selectedOptions.every(index => question.correct.includes(index));
        
        if (allCorrectSelected && noIncorrectSelected) {
            score++;
        } else {
            wrongAnswers.push({
                question: question.question,
                selectedAnswer: selectedOptions.map(i => question.options[i]).join(', '),
                correctAnswer: question.correct.map(i => question.options[i]).join(', ')
            });
        }
    } else {
        if (selectedOptions[0] === question.correct) {
            score++;
        } else {
            wrongAnswers.push({
                question: question.question,
                selectedAnswer: question.options[selectedOptions[0]],
                correctAnswer: question.options[question.correct]
            });
        }
    }
    
    // Move to next question or show results
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    // Hide the quiz content
    document.querySelector('.quiz-content').style.display = 'none';
    
    // Show results
    resultsElement.style.display = 'block';
    
    const scoreElement = document.getElementById('score');
    const totalQuestionsResult = document.getElementById('total-questions-result');
    
    if (scoreElement) scoreElement.textContent = score;
    if (totalQuestionsResult) totalQuestionsResult.textContent = currentQuestions.length;
    
    const wrongAnswersElement = document.getElementById('wrong-answers');
    if (wrongAnswersElement) {
        if (wrongAnswers.length > 0) {
            const wrongAnswersList = wrongAnswers.map(wrong => `
                <div class="wrong-answer-item">
                    <p><strong>Questão:</strong> ${wrong.question}</p>
                    <p><strong>Sua resposta:</strong> ${wrong.selectedAnswer}</p>
                    <p><strong>Resposta correta:</strong> ${wrong.correctAnswer}</p>
                </div>
            `).join('');
            
            wrongAnswersElement.innerHTML = `
                <h3>Questões que você errou:</h3>
                ${wrongAnswersList}
            `;
        } else {
            wrongAnswersElement.innerHTML = '<p>Parabéns! Você acertou todas as questões!</p>';
        }
    }
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
        // Restore previous selection
        const previousSelections = userAnswers[currentQuestionIndex] || [];
        const options = optionsElement.getElementsByClassName('option');
        Array.from(options).forEach((option, index) => {
            if (previousSelections.includes(index)) {
                option.classList.add('selected');
            }
        });
        // Enable/disable navigation buttons
        updateNavigationButtons();
    }
} 