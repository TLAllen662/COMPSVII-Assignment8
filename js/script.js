console.log("script.js connected!");
let buttons = document.querySelectAll('.answer-btn');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            console.log('Button clicked!');
        btn.classlist.remove('selected');
        
    button.classList.add("selected");
        let answer = button.getAttribute('data-answer');
        let buttonID = button.dataset.buttonid
        let response = button.dataset.mood;
        userAnswers[buttonID] = response;
        console.log(userAnswers);
        let output = document.getElementById('output');
        output.textContent = 'You selected:' + answer;


    if (answer === 'A') {
        output.textContent = 'You chose A';
    } else if (answer === 'B') {
        output.textContent = 'You chose B';
    } else if (answer === 'C') {
        output.textContent = 'You chose C';
    } else if (answer === 'D') {
        output.textContent = 'You chose D';
    }
})
    });


