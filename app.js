let cardIndex = 0;
const totalCards = 317;
let cardContainer = document.getElementById('card-container');
let currentCardImage = document.getElementById('current-card');
let resetButton = document.getElementById('reset-button');

const getRandomCard = () => {
    // Get a random card index between 1 and 317
    return Math.floor(Math.random() * totalCards) + 1;
};

const flipCard = () => {
    // First click: flip the card
    currentCardImage.style.transform = "rotateY(180deg)";
    setTimeout(() => {
        const randomCardIndex = getRandomCard();
        currentCardImage.src = `./Individual PNGs/Card (${randomCardIndex}).png`;
        currentCardImage.style.transform = "rotateY(0deg)";
        cardIndex++;

        if (cardIndex >= totalCards) {
            setTimeout(() => {
                showResetButton();
            }, 500);
        }
    }, 300);
};

const slideAndReveal = () => {
    // Slide the current card off screen quickly
    const directions = [
        'left', 'right', 'top', 'bottom', 
        'top-left', 'top-right', 'bottom-left', 'bottom-right',
        'top-very-left', 'top-very-right', 'bottom-very-left', 'bottom-very-right',
        'left-top', 'left-bottom', 'right-top', 'right-bottom',
        'left-far', 'right-far', 'top-far', 'bottom-far',
        'top-left-far', 'top-right-far', 'bottom-left-far', 'bottom-right-far',
        'right-top-far', 'right-bottom-far', 'left-top-far', 'left-bottom-far'
    ];
    
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    

// Apply the sliding animation with additional random directions
switch (randomDirection) {
    case 'left':
        currentCardImage.style.transform = 'translateX(-500px)';
        break;
    case 'right':
        currentCardImage.style.transform = 'translateX(500px)';
        break;
    case 'top':
        currentCardImage.style.transform = 'translateY(-500px)';
        break;
    case 'bottom':
        currentCardImage.style.transform = 'translateY(500px)';
        break;
    case 'top-left':
        currentCardImage.style.transform = 'translate(-500px, -500px)';  // Diagonal top-left
        break;
    case 'top-right':
        currentCardImage.style.transform = 'translate(500px, -500px)';  // Diagonal top-right
        break;
    case 'bottom-left':
        currentCardImage.style.transform = 'translate(-500px, 500px)';  // Diagonal bottom-left
        break;
    case 'bottom-right':
        currentCardImage.style.transform = 'translate(500px, 500px)';  // Diagonal bottom-right
        break;
    case 'top-very-left':
        currentCardImage.style.transform = 'translate(-700px, -500px)';  // Very diagonal top-left
        break;
    case 'top-very-right':
        currentCardImage.style.transform = 'translate(700px, -500px)';  // Very diagonal top-right
        break;
    case 'bottom-very-left':
        currentCardImage.style.transform = 'translate(-700px, 500px)';  // Very diagonal bottom-left
        break;
    case 'bottom-very-right':
        currentCardImage.style.transform = 'translate(700px, 500px)';  // Very diagonal bottom-right
        break;
    case 'left-top':
        currentCardImage.style.transform = 'translate(-500px, -700px)';  // Left and up
        break;
    case 'left-bottom':
        currentCardImage.style.transform = 'translate(-500px, 700px)';  // Left and down
        break;
    case 'right-top':
        currentCardImage.style.transform = 'translate(500px, -700px)';  // Right and up
        break;
    case 'right-bottom':
        currentCardImage.style.transform = 'translate(500px, 700px)';  // Right and down
        break;
    case 'left-far':
        currentCardImage.style.transform = 'translateX(-1000px)';  // Extreme left
        break;
    case 'right-far':
        currentCardImage.style.transform = 'translateX(1000px)';  // Extreme right
        break;
    case 'top-far':
        currentCardImage.style.transform = 'translateY(-1000px)';  // Extreme top
        break;
    case 'bottom-far':
        currentCardImage.style.transform = 'translateY(1000px)';  // Extreme bottom
        break;
    case 'top-left-far':
        currentCardImage.style.transform = 'translate(-1000px, -1000px)';  // Extreme top-left diagonal
        break;
    case 'top-right-far':
        currentCardImage.style.transform = 'translate(1000px, -1000px)';  // Extreme top-right diagonal
        break;
    case 'bottom-left-far':
        currentCardImage.style.transform = 'translate(-1000px, 1000px)';  // Extreme bottom-left diagonal
        break;
    case 'bottom-right-far':
        currentCardImage.style.transform = 'translate(1000px, 1000px)';  // Extreme bottom-right diagonal
        break;
    case 'right-top-far':
        currentCardImage.style.transform = 'translate(1000px, -700px)';  // Extreme right and top
        break;
    case 'right-bottom-far':
        currentCardImage.style.transform = 'translate(1000px, 700px)';  // Extreme right and bottom
        break;
    case 'left-top-far':
        currentCardImage.style.transform = 'translate(-1000px, -700px)';  // Extreme left and top
        break;
    case 'left-bottom-far':
        currentCardImage.style.transform = 'translate(-1000px, 700px)';  // Extreme left and bottom
        break;
    default:
        currentCardImage.style.transform = 'translateX(-500px)';  // Default to left if something goes wrong
        break;
}

    currentCardImage.style.opacity = '0';  // Fade out the card

    setTimeout(() => {
        // Once the card has moved offscreen, reveal a new card below
        const randomCardIndex = getRandomCard();
        currentCardImage.src = `./Individual PNGs/Card (${randomCardIndex}).png`;
        currentCardImage.style.transform = 'none';  // Reset the transform
        currentCardImage.style.opacity = '1';  // Make it visible again
    }, 600);  // This matches the duration of the slide/fade out
};

const showResetButton = () => {
    resetButton.style.display = 'block';
    cardContainer.style.display = 'none';  // Hide the cards
};

const resetGame = () => {
    cardIndex = 0;
    resetButton.style.display = 'none';
    cardContainer.style.display = 'inline-block';
    currentCardImage.src = './Individual PNGs/Cover Card.png';
};

const handleCardClick = () => {
    if (cardIndex === 0) {
        flipCard();
    } else if (cardIndex < totalCards) {
        slideAndReveal();
        cardIndex++;
    }
};

const handleResetClick = () => {
    resetGame();
};

// Event Listeners
cardContainer.addEventListener('click', handleCardClick);
resetButton.addEventListener('click', handleResetClick);
