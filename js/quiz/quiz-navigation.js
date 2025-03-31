const QuizNavigation = {
    init: function() {
        document.getElementById('next-button').addEventListener('click', () => QuizManager.navigateToNext());
        document.getElementById('prev-button').addEventListener('click', () => QuizManager.navigateToPrevious());
    },

    updateButtons: function(state) {
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');

        if (prevButton && nextButton) {
            prevButton.disabled = state.currentIndex === 0;
            nextButton.disabled = !state.userAnswers[state.currentIndex]?.length;
        }
    }
}; 