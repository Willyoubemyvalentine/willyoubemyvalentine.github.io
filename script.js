const centeredImage = document.getElementById('centered-image');
const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const questionText = document.getElementById('question-text');
let noButtonMoved = false;
let textAdded = false;

function getRandomPosition() {
    const rect = centeredImage.getBoundingClientRect();
    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    const imageRect = centeredImage.getBoundingClientRect();
    if (
        newX >= imageRect.left - noButton.offsetWidth &&
        newX <= imageRect.right &&
        newY >= imageRect.top - noButton.offsetHeight &&
        newY <= imageRect.bottom
    ) {
        return getRandomPosition();
    }

    return { x: newX, y: newY };
}

function removeElements() {
    centeredImage.remove();
    noButton.remove();
    yesButton.remove();
    questionText.remove();
    const container = document.createElement('div');
    container.style.textAlign = 'center';
    const newImage = document.createElement('img');
    newImage.src = 'Images/image_second.jpg';
    newImage.id = 'next-step-image';
    newImage.style.width = '350px'
    newImage.style.height = 'auto'
    container.appendChild(newImage);
    const newText = document.createElement('p');
    newText.textContent = 'Slayyyyyyyy 💅 see you on the 14th x';
    newText.style.color = 'white';
    newText.style.fontSize = '48px';
    container.appendChild(newText);
    document.body.appendChild(container);
}

function replaceQuestionText() {
    if (!textAdded) {
        questionText.textContent = "Ha I knew you would try!";
        questionText.style.fontSize = '48px';
        textAdded = true;
    }
}

noButton.addEventListener('mouseover', () => {
    const newPosition = getRandomPosition();
    noButton.style.position = 'absolute';
    noButton.style.left = newPosition.x + 'px';
    noButton.style.top = newPosition.y + 'px';
    noButtonMoved = true;

    replaceQuestionText();
});

yesButton.addEventListener('click', () => {
    removeElements();
});
