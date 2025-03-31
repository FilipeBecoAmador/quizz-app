class QuestionnaireManager {
    constructor() {
        this.questionnaires = JSON.parse(localStorage.getItem('questionnaires')) || this.getDefaultQuestionnaires();
        if (!this.questionnaires['Quiz Padrão']) {
            this.createDefaultQuiz();
        }
    }

    getDefaultQuestionnaires() {
        return {
            'Quiz Padrão': this.createDefaultQuiz()
        };
    }

    createDefaultQuiz() {
        // Shuffle all questions and pick 20 random ones
        const shuffledQuestions = [...allQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 20);
        
        // Save to storage
        this.questionnaires['Quiz Padrão'] = shuffledQuestions;
        this.saveToStorage();
        
        return shuffledQuestions;
    }

    createQuestionnaire(name, questions) {
        if (this.questionnaires[name]) {
            // If quiz exists, append a number to the name
            let newName = name;
            let counter = 1;
            while (this.questionnaires[newName]) {
                newName = `${name} (${counter})`;
                counter++;
            }
            name = newName;
        }
        this.questionnaires[name] = questions;
        this.saveToStorage();
        return name; // Return the final name used
    }

    getQuestionnaire(name) {
        return this.questionnaires[name];
    }

    getAllQuestionnaires() {
        return Object.keys(this.questionnaires);
    }

    saveToStorage() {
        localStorage.setItem('questionnaires', JSON.stringify(this.questionnaires));
    }
}

const manager = new QuestionnaireManager();

function addNewQuestion() {
    const container = document.getElementById('questions-container');
    const questionCard = document.createElement('div');
    questionCard.className = 'question-card';
    questionCard.innerHTML = `
        <div class="form-group">
            <label>Questão</label>
            <input type="text" class="question-input" required>
        </div>
        <div class="options-container">
            <div class="form-group">
                <label>Opção 1</label>
                <input type="text" class="option-input" required>
            </div>
            <div class="form-group">
                <label>Opção 2</label>
                <input type="text" class="option-input" required>
            </div>
        </div>
        <button type="button" class="secondary-button" onclick="addOption(this)">+ Adicionar Opção</button>
        <div class="form-group">
            <label>Resposta(s) Correta(s) (ex: 0,1)</label>
            <input type="text" class="correct-answer-input" required>
        </div>
        <div class="question-card-footer">
            <button type="button" class="danger-button" onclick="removeQuestion(this)">Remover Questão</button>
        </div>
    `;
    container.appendChild(questionCard);
}

function addOption(button) {
    const optionsContainer = button.parentElement.querySelector('.options-container');
    const optionCount = optionsContainer.children.length + 1;
    const optionGroup = document.createElement('div');
    optionGroup.className = 'form-group';
    optionGroup.innerHTML = `
        <label>Opção ${optionCount}</label>
        <input type="text" class="option-input" required>
    `;
    optionsContainer.appendChild(optionGroup);
}

function removeQuestion(button) {
    button.parentElement.parentElement.remove();
}

function collectQuestions() {
    const questions = [];
    document.querySelectorAll('.question-card').forEach(card => {
        const question = {
            question: card.querySelector('.question-input').value,
            options: Array.from(card.querySelectorAll('.option-input')).map(input => input.value),
            correct: card.querySelector('.correct-answer-input').value
                .split(',')
                .map(num => parseInt(num.trim()))
        };
        questions.push(question);
    });
    return questions;
}

function updateQuizList() {
    const select = document.getElementById('quiz-select');
    select.innerHTML = '<option value="">Selecione um quiz...</option>';
    manager.getAllQuestionnaires().forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
    });
}

// Add these functions to handle import/export

function exportQuiz() {
    const name = document.getElementById('quiz-name').value;
    if (!name) {
        alert('Por favor, dê um nome ao quiz antes de exportar');
        return;
    }

    // Collect all questions
    const questions = collectQuestions();
    if (questions.length === 0) {
        alert('Adicione pelo menos uma questão antes de exportar');
        return;
    }

    // Create export object
    const exportData = {
        name: name,
        questions: questions
    };

    // Convert to JSON and create download
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `${name.replace(/\s+/g, '_')}_quiz.json`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
}

function handleFileImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            
            // Validate imported data
            if (!importedData.name || !Array.isArray(importedData.questions)) {
                throw new Error('Formato de arquivo inválido');
            }

            // Add imported quiz to questionnaires
            manager.createQuestionnaire(importedData.name, importedData.questions);
            
            // Update select options
            updateQuizList();
            
            // Select the imported quiz
            const select = document.getElementById('quiz-select');
            select.value = importedData.name;
            
            alert('Quiz importado com sucesso!');
        } catch (error) {
            alert('Erro ao importar quiz: ' + error.message);
        }
    };
    reader.readAsText(file);
} 