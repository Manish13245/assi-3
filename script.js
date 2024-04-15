const button = document.getElementById('changeButton');
const text = document.getElementById('changeText');

button.addEventListener('mouseover', () => {
    text.textContent = 'Text changed! Hover over the button again to reset.';
});

button.addEventListener('mouseout', () => {
    text.textContent = 'Hover over the button to change this text.';
});