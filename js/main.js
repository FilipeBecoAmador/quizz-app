// Main application initialization and navigation
const App = {
    init: function() {
        this.bindEvents();
        QuizNavigation.init();
        this.showHome();
    },

    bindEvents: function() {
        // Main menu buttons
        document.getElementById('create-quiz-btn').addEventListener('click', () => this.showCreateQuiz());
        document.getElementById('edit-quiz-btn').addEventListener('click', () => this.showEditQuiz());
        document.getElementById('take-quiz-btn').addEventListener('click', () => this.showOpenQuiz());

        // Go home buttons - bind all buttons with this functionality
        document.querySelectorAll('[id^="go-home"]').forEach(button => {
            button.addEventListener('click', () => this.showHome());
        });

        // Export button in editor
        document.getElementById('export-quiz-btn')?.addEventListener('click', () => FileHandler.exportQuiz());
    },

    showHome: function() {
        this.showScreen('home-screen');
        // Reset any state if needed
        EditorManager.reset();
    },

    showScreen: function(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    },

    showCreateQuiz: function() {
        this.showScreen('create-quiz-screen');
        EditorManager.reset();
    },

    showEditQuiz: function() {
        FileHandler.openFileDialog('edit');
    },

    showOpenQuiz: function() {
        FileHandler.openFileDialog('take');
    }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => App.init()); 