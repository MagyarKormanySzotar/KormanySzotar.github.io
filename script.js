document.addEventListener('DOMContentLoaded', () => {
    var popup = document.getElementById('disclaimer-popup');
    var closeButton = document.getElementsByClassName('close-button')[0];

    // Show the popup when the page loads
    popup.style.display = 'block';

    // When the user clicks on <span> (x), close the popup
    closeButton.onclick = function() {
        popup.style.display = 'none';
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }

    var infoTrigger = document.getElementById('info-trigger');
    var infoPopup = document.getElementById('info-popup');
    var infoCloseButton = document.getElementsByClassName('info-close-button')[0];

    infoTrigger.onclick = function() {
        infoPopup.style.display = 'block';
    }

    infoCloseButton.onclick = function() {
        infoPopup.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == infoPopup) {
            infoPopup.style.display = 'none';
        }
    }


    const wordBoxes = document.querySelectorAll('.word-box');

    wordBoxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('active');
        });
    });
});