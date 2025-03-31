const FileHandler = {
    openFileDialog: function(mode) {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.json';
        fileInput.style.display = 'none';
        
        fileInput.addEventListener('change', (event) => {
            if (mode === 'edit') {
                this.handleEditFile(event);
            } else {
                this.handleQuizFile(event);
            }
        });
        
        document.body.appendChild(fileInput);
        fileInput.click();
        document.body.removeChild(fileInput);
    },

    handleEditFile: function(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                
                // Validate imported data
                if (!importedData.name || !Array.isArray(importedData.questions) || 
                    importedData.questions.length === 0) {
                    throw new Error('Formato de arquivo inválido');
                }

                // Load quiz into editor
                EditorManager.loadQuiz(importedData);
                
            } catch (error) {
                alert('Erro ao importar quiz para edição: ' + error.message);
            }
        };
        reader.readAsText(file);
    },

    handleQuizFile: function(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                
                // Validate imported data
                if (!importedData.name || !Array.isArray(importedData.questions) || 
                    importedData.questions.length === 0 || !importedData.quizSize) {
                    throw new Error('Formato de arquivo inválido');
                }

                // First switch to quiz screen
                App.showScreen('quiz-screen');

                // Then initialize the quiz after the screen is shown
                setTimeout(() => {
                    // Randomly select questions based on quiz size
                    const shuffledQuestions = [...importedData.questions]
                        .sort(() => Math.random() - 0.5)
                        .slice(0, Math.min(importedData.quizSize, importedData.questions.length));

                    // Initialize quiz with selected questions
                    QuizManager.init(shuffledQuestions, importedData.name);
                }, 100);
                
            } catch (error) {
                alert('Erro ao importar quiz: ' + error.message);
            }
        };
        reader.readAsText(file);
    },

    isExporting: false, // Flag to prevent multiple exports

    exportQuiz: function(event) {
        // Prevent multiple simultaneous exports
        if (this.isExporting) return;
        this.isExporting = true;

        try {
            const quizData = EditorManager.collectQuizData();
            const fileName = `${quizData.name.replace(/\s+/g, '_')}_quiz.json`;
            
            // Create download link
            const dataStr = JSON.stringify(quizData, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            
            // Use direct download approach
            if (window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveBlob(blob, fileName);
            } else {
                const elem = window.document.createElement('a');
                elem.href = window.URL.createObjectURL(blob);
                elem.download = fileName;        
                document.body.appendChild(elem);
                elem.click();        
                document.body.removeChild(elem);
                window.URL.revokeObjectURL(elem.href);
            }
        } catch (error) {
            alert(error.message);
        } finally {
            // Reset export flag after a short delay
            setTimeout(() => {
                this.isExporting = false;
            }, 1000);
        }
    },

    collectQuestions: function() {
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
    },

    editQuiz: function(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                
                // Validate imported data
                if (!importedData.name || !Array.isArray(importedData.questions) || 
                    importedData.questions.length === 0) {
                    throw new Error('Formato de arquivo inválido');
                }

                // Switch to create quiz screen
                showScreen('create-quiz-screen');
                
                // Fill in the quiz name
                document.getElementById('quiz-name').value = importedData.name;
                
                // Fill in the quiz size
                document.getElementById('quiz-size').value = importedData.quizSize || 20;
                
                // Clear existing questions
                document.getElementById('questions-container').innerHTML = '';
                
                // Add each question from the imported data
                importedData.questions.forEach(questionData => {
                    const container = document.getElementById('questions-container');
                    const questionCard = document.createElement('div');
                    questionCard.className = 'question-card';
                    
                    // Create the question input
                    questionCard.innerHTML = `
                        <div class="form-group">
                            <label>Questão</label>
                            <input type="text" class="question-input" required value="${questionData.question}">
                        </div>
                        <div class="options-container">
                            ${questionData.options.map((option, index) => `
                                <div class="form-group">
                                    <label>Opção ${index + 1}</label>
                                    <input type="text" class="option-input" required value="${option}">
                                </div>
                            `).join('')}
                        </div>
                        <button type="button" class="secondary-button" onclick="addOption(this)">+ Adicionar Opção</button>
                        <div class="form-group">
                            <label>Resposta(s) Correta(s) (ex: 0,1)</label>
                            <input type="text" class="correct-answer-input" required value="${Array.isArray(questionData.correct) ? questionData.correct.join(',') : questionData.correct}">
                        </div>
                        <div class="question-card-footer">
                            <button type="button" class="danger-button" onclick="removeQuestion(this)">Remover Questão</button>
                        </div>
                    `;
                    
                    container.appendChild(questionCard);
                });
                
            } catch (error) {
                alert('Erro ao importar quiz para edição: ' + error.message);
            }
        };
        reader.readAsText(file);
    },

    init: function() {
        // Remove any existing listeners
        const exportBtn = document.getElementById('export-quiz-btn');
        if (exportBtn) {
            // Remove old button and create new one
            const newExportBtn = document.createElement('button');
            newExportBtn.id = 'export-quiz-btn';
            newExportBtn.className = 'main-button';
            newExportBtn.textContent = 'Exportar';
            newExportBtn.type = 'button';
            
            // Replace old button with new one
            exportBtn.parentNode.replaceChild(newExportBtn, exportBtn);
            
            // Add single click handler
            newExportBtn.onclick = (e) => {
                e.preventDefault();
                FileHandler.exportQuiz.call(FileHandler, e);
            };
        }
    }
};

// Initialize once when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    FileHandler.init();
}); 