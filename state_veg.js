document.getElementById('tomatoButton').addEventListener('click', function() {
    // Handle the selection of whole wheat bread
    // alert('You chose Whole Wheat Bread');
    showSubmitButton();
});

document.getElementById('onionButton').addEventListener('click', function() {
    // Handle the selection of white bread
    // alert('You chose White Bread');
    showSubmitButton();
});

document.getElementById('pickleButton').addEventListener('click', function() {
    // Handle the selection of white bread
    // alert('You chose White Bread');
    showSubmitButton();
});

document.getElementById('lettuceButton').addEventListener('click', function() {
    // Handle the selection of white bread
    // alert('You chose White Bread');
    showSubmitButton();
});

function showSubmitButton() {
    // Show the submit button when a choice is made
    document.getElementById('submitButton').style.display = 'block';
}
function redirectToResultPage() {
    window.location.href = 'slicing.html';
}