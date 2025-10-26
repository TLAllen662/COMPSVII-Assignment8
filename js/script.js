console.log("script.js connected!");
let userAnswers = {};
let buttons = document.querySelectorAll('.answer-btn');

document.querySelectorAll('question-1').forEach(function(btn) {
btn.disabled = true;
})

document.querySelectorAll('question-2').forEach(function(btn) {
btn.disabled = true;
})

document.querySelectorAll('question-3').forEach(function(btn) {
btn.disabled = true;
})

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        console.log('Button clicked!');
        // remove 'selected' from all buttons
        buttons.forEach(function(btn) {
            btn.classList.remove('selected');
        });

        button.classList.add('selected');

        let answer = button.getAttribute('data-answer');
        let buttonID = button.dataset.buttonid;
        let response = button.dataset.answer === 'A' ? 4 :
                    button.dataset.answer === 'B' ? 3 :
                    button.dataset.answer === 'C' ? 2 :
                    button.dataset.answer === 'D' ? 1 : 0;
        userAnswers[buttonID] = response;
        console.log(userAnswers);

        let output = document.getElementById('output');
        output.textContent = 'You selected: ' + answer;

        if (answer === 'A') {
            output.textContent = 'You chose A';
        } else if (answer === 'B') {
            output.textContent = 'You chose B';
        } else if (answer === 'C') {
            output.textContent = 'You chose C';
        } else if (answer === 'D') {
            output.textContent = 'You chose D';
        }

        displayResult();
    });
});

function displayResult() {
    let output = document.getElementById('output');
    let total = 0;
    for (let key in userAnswers) {
        total += parseInt(userAnswers[key], 10) || 0;
    }

    if (total <= 3) {
        output.textContent = "You prefer baseball!";
    } else if (total > 3 && total <= 6) {
        output.textContent = "You prefer basketball!";
    } else if (total > 6 && total <= 9) {
        output.textContent = "You prefer soccer!";
    } else if (total > 9) {
        output.textContent = "You prefer football!";
    }

    // update result display elements
    let resultText = document.getElementById('result-text');
    if (resultText) {
        resultText.textContent = output.textContent;
    }
    let resultContainer = document.getElementById('result-container');
    if (resultContainer) {
        resultContainer.style.display = 'block';
    }
}
let output = document.getElementById('show-result-btn');
output.addEventListener('click', function() {
    displayResult();
});