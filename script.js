document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            this.classList.toggle('active');
            const answer = this.querySelector('.answer');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

            // Fechar as outras respostas quando uma pergunta for aberta
            questions.forEach(function (otherQuestion) {
                if (otherQuestion !== question) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.querySelector('.answer').style.display = 'none';
                }
            });
        });
    });
});
