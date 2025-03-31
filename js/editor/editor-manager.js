const EditorManager = {
    state: {
        quizName: '',
        quizSize: 0,
        questions: []
    },

    reset: function() {
        this.state.quizName = '';
        this.state.quizSize = 0;
        this.state.questions = [];
        
        // Reset UI elements
        document.getElementById('quiz-name').value = '';
        document.getElementById('quiz-size').value = '';
        document.getElementById('questions-container').innerHTML = '';
        
        // Add first empty question
        EditorUI.addQuestion();
    },

    loadQuiz: function(quizData) {
        try {
            // Reset current state
            this.reset();
            
            // Set quiz name and size
            document.getElementById('quiz-name').value = quizData.name;
            document.getElementById('quiz-size').value = quizData.quizSize || quizData.questions.length;
            
            // Clear existing questions
            document.getElementById('questions-container').innerHTML = '';
            
            // Load each question
            quizData.questions.forEach(questionData => {
                const questionElement = EditorUI.addQuestion();
                EditorUI.populateQuestion(questionElement, questionData);
            });
            
            // Switch to editor screen
            App.showScreen('create-quiz-screen');
            
        } catch (error) {
            console.error('Error loading quiz:', error);
            alert('Erro ao carregar quiz: ' + error.message);
        }
    },

    collectQuizData: function() {
        const quizName = document.getElementById('quiz-name').value.trim();
        const quizSize = parseInt(document.getElementById('quiz-size').value);
        
        if (!quizName) {
            throw new Error('Nome do quiz é obrigatório');
        }

        const questionElements = document.querySelectorAll('.question-card');
        if (questionElements.length === 0) {
            throw new Error('Adicione pelo menos uma questão');
        }

        const questions = [];
        questionElements.forEach(questionElement => {
            const questionData = EditorUI.collectQuestionData(questionElement);
            if (questionData) {
                questions.push(questionData);
            }
        });

        if (questions.length === 0) {
            throw new Error('Nenhuma questão válida encontrada');
        }

        if (quizSize && quizSize > questions.length) {
            throw new Error('O tamanho do quiz não pode ser maior que o número de questões disponíveis');
        }

        return {
            name: quizName,
            quizSize: quizSize || questions.length,
            questions: questions
        };
    }
}; 