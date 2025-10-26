console.log("script.js connected!");
let buttons = document.querySelectAll('.answer-btn');
    buttons.forEach(function(button) {
    button.addEventListener('click', function() {
let answer = this.getAttribute('data-answer');
    output.textContent = "You selected: " + answer;
 })
});