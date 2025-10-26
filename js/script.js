console.log("script.js connected!");
let buttons = document.querySelectAll('.answer-btn');
    buttons.forEach(function(button) {
    button.addEventListener('click', function() {
    let mood = button.getAttribute('data-mood');
    let buttonID = button.dataset.buttonid
    let response = button.dataset.mood;
    let output = document.getElementById('output');
    let answer = this.getAttribute('data-answer');
    output.textContent = 'You selected:' + answer;

    if (mood === '1') {
        output.textContent = 'You chose A';
    } else if (mood === '2') {
        output.textContent = 'You chose B';
    } else if (mood === '3') {
        output.textContent = 'You chose C';
    } else if (mood === '4') {
        output.textContent = 'You chose D';
    }
    
})
});

