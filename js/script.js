console.log("script.js connected!");
let userAnswers = {};
let buttons = document.querySelectorAll('.answer-btn');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        console.log('Button clicked!');
        // Get all buttons in the same question group
        const buttonId = button.getAttribute('data-buttonid');
        const questionButtons = document.querySelectorAll(`.answer-btn[data-buttonid="${buttonId}"]`);
        
        // Remove 'selected' from all buttons in this question group
        questionButtons.forEach(function(btn) {
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

        // Store the answer and update the UI
        console.log(`Question ${buttonID}: selected ${answer} (score: ${response})`);
    });
});

function displayResult() {
    // Check if all questions are answered
    if (Object.keys(userAnswers).length !== 3) {
        alert("Please answer all questions before viewing the results!");
        return;
    }

    let total = 0;
    for (let key in userAnswers) {
        total += parseInt(userAnswers[key], 10) || 0;
    }

    let resultText = document.getElementById('result-text');
    let resultContainer = document.getElementById('result-container');
    
    // Calculate result based on total score
    let result;
    if (total <= 6) {
        result = "You prefer baseball! Baseball tends to be lower contact and more strategic, which aligns with your preferences.";
    } else if (total <= 8) {
        result = "You prefer basketball! Basketball offers a good mix of athleticism and moderate contact, matching your choices.";
    } else if (total <= 10) {
        result = "You prefer soccer! Soccer combines skill with moderate contact and global appeal, fitting your selections.";
    } else {
        result = "You prefer football! Your choices indicate you enjoy high-contact, high-intensity sports like football.";
    }

    // Update the result elements
    if (resultText) {
        resultText.textContent = result;
    }
    if (resultContainer) {
        resultContainer.style.display = 'block';
    }
}
let showResultButton = document.getElementById('show-result');
if (showResultButton) {
    showResultButton.addEventListener('click', function() {
        displayResult();
    });
}