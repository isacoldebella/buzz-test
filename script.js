document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let totalScore = 0;
    let allAnswered = true;

    for (let i = 1; i <= 15; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question) {
            totalScore += parseInt(question.value);
        } else {
            allAnswered = false;
            break;
        }
    }

    if (!allAnswered) {
        alert('Por favor, responda todas as perguntas.');
        return;
    }

    let resultText = '';
    if (totalScore >= 15 && totalScore <= 25) {
        resultText = '🔴 15–25 pts → Morre primeiro';
    } else if (totalScore >= 26 && totalScore <= 40) {
        resultText = '🟠 26–40 pts → Morre cedo';
    } else if (totalScore >= 41 && totalScore <= 50) {
        resultText = '🟡 41–50 pts → Sobrevive bastante';
    } else if (totalScore >= 51 && totalScore <= 60) {
        resultText = '🟢 51–60 pts → Final survivor';
    }

    document.getElementById('result').innerHTML = `<p>Sua pontuação: ${totalScore}</p><p>${resultText}</p>`;
    document.getElementById('result').style.display = 'block';
});