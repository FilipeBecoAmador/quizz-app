const EditorUI = {
    addQuestion: function(event) {
        // Prevent any form submission
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.innerHTML = `
            <div class="question-header">
                <textarea class="question-text" placeholder="Digite a questão"></textarea>
                <button type="button" class="remove-question" onclick="EditorUI.removeQuestion(this)">×</button>
            </div>
            <div class="options-container"></div>
            <button type="button" class="add-option" onclick="EditorUI.addOption(this)">+ Adicionar Opção</button>
        `;

        document.getElementById('questions-container').appendChild(questionCard);
        
        // Add initial option
        this.addOption(questionCard.querySelector('.add-option'));
        
        // Initialize auto-resize for the question text
        const questionText = questionCard.querySelector('.question-text');
        this.initAutoResize(questionText);
        
        return questionCard;
    },

    addOption: function(button) {
        const optionsContainer = button.parentElement.querySelector('.options-container');
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option-row';
        optionDiv.innerHTML = `
            <textarea class="option-text" placeholder="Digite a opção"></textarea>
            <input type="checkbox" class="correct-option">
            <button onclick="EditorUI.removeOption(this)">×</button>
        `;
        optionsContainer.appendChild(optionDiv);

        // Initialize auto-resize for the new option
        const optionText = optionDiv.querySelector('.option-text');
        this.initAutoResize(optionText);
    },

    removeQuestion: function(button) {
        button.closest('.question-card').remove();
    },

    removeOption: function(button) {
        button.parentElement.remove();
    },

    populateQuestion: function(questionElement, questionData) {
        // Set question text
        const questionText = questionElement.querySelector('.question-text');
        questionText.value = questionData.text || questionData.question || '';

        // Clear existing options
        const optionsContainer = questionElement.querySelector('.options-container');
        optionsContainer.innerHTML = '';

        // Add each option
        questionData.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option-row';
            optionDiv.innerHTML = `
                <textarea class="option-text">${option}</textarea>
                <input type="checkbox" class="correct-option" ${this.isCorrectAnswer(index, questionData.correct) ? 'checked' : ''}>
                <button onclick="EditorUI.removeOption(this)">×</button>
            `;
            optionsContainer.appendChild(optionDiv);
        });

        // Wait for the next frame to ensure content is rendered
        requestAnimationFrame(() => {
            // Resize question
            this.initAutoResize(questionText);
            
            // Resize all options
            questionElement.querySelectorAll('.option-text').forEach(optionText => {
                this.initAutoResize(optionText);
            });
        });
    },

    isCorrectAnswer: function(index, correct) {
        if (Array.isArray(correct)) {
            return correct.includes(index);
        }
        return index === correct;
    },

    collectQuestionData: function(questionElement) {
        const questionText = questionElement.querySelector('.question-text').value.trim();
        if (!questionText) return null;

        const options = [];
        const correct = [];
        
        questionElement.querySelectorAll('.option-row').forEach((optionRow, index) => {
            const optionText = optionRow.querySelector('.option-text').value.trim();
            const isCorrect = optionRow.querySelector('.correct-option').checked;
            
            if (optionText) {
                options.push(optionText);
                if (isCorrect) {
                    correct.push(index);
                }
            }
        });

        if (options.length < 2) return null;

        return {
            text: questionText,
            options: options,
            correct: correct.length === 1 ? correct[0] : correct
        };
    },

    initAutoResize: function(element) {
        // Force a reflow
        element.style.height = '0';
        element.style.height = (element.scrollHeight) + 'px';
        
        element.addEventListener('input', function() {
            this.style.height = '0';
            this.style.height = (this.scrollHeight) + 'px';
        });
    },

    init: function() {
        // Remove any existing event listeners
        const addQuestionBtn = document.getElementById('add-question-btn');
        addQuestionBtn.replaceWith(addQuestionBtn.cloneNode(true));
        
        // Add new event listener
        document.getElementById('add-question-btn').addEventListener('click', (e) => {
            this.addQuestion(e);
        });
    }
};

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    EditorUI.init();
}); 