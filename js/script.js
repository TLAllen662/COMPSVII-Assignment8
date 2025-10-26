console.log("script.js connected!");
let buttons = document.querySelectAll('.answer-btn');
    buttons.forEach(function(button) {
    button.addEventListener('click', function() {
    let mood = button.getAttribute('data-mood');
    let output = document.getElementById('output');
    let answer = this.getAttribute('data-answer');
    output.textContent = 'You selected:' + answer;

    if (mood === '1') {
        output.textContent = 'Football Fan!';
    } else if (mood === '2') {
        output.textContent = 'Soccer Fan!';
    } else if (mood === '3') {
        output.textContent = 'Basketball Fan!';
    } else if (mood === '4') {
        output.textContent = 'Baseball Fan!';
    }
    
})
});

