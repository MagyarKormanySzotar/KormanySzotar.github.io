document.addEventListener('DOMContentLoaded', () => {
    const wordBoxes = document.querySelectorAll('.word-box');

    wordBoxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('active');
        });
    });
});