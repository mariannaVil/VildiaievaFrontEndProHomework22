let parentContainer = document.getElementById('parent-smile');
let countsContainer = document.getElementById('counts');
parentContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('smile')) {
        let optionIndex = Array.from(parentContainer.children).indexOf(event.target);
        let resultElement = countsContainer.children[optionIndex];
        resultElement.textContent = parseInt(resultElement.textContent) + 1;
    }
});