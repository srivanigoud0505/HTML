const categories = {
    fruits: ["🍎", "🍌", "🍓", "🍇", "🍊", "🍉", "🍍", "🥝"],
    emojis: ["😀", "😂", "😍", "😎", "😡", "🤯", "😱", "🤩"],
    animals: ["🐶", "🐱", "🐭", "🐰", "🐼", "🦁", "🐸", "🐷"],
    planets: ["🌍", "🪐", "🌕", "☀️", "🌟", "🌌", "🛸", "🌠"]
};

let selectedCategory = [];
let flippedCards = [];
let matchedPairs = 0;
let score = 0;
let timer = 30;
let timerInterval;

function startGame(category) {
    document.getElementById("landing-page").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");

    selectedCategory = [...categories[category], ...categories[category]]; // Duplicate pairs
    selectedCategory.sort(() => Math.random() - 0.5); // Shuffle

    document.getElementById("grid").innerHTML = selectedCategory.map((item, index) => 
        `<div class="card" data-value="${item}" onclick="handleCardClick(this)"></div>`
    ).join("");

    score = 0;
    timer = 30;
    matchedPairs = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("timer").innerText = timer;
    
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

function handleCardClick(card) {
    if (flippedCards.length === 2 || card.classList.contains("flipped")) return;
    
    card.innerText = card.getAttribute("data-value");
    card.classList.add("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    if (flippedCards[0].innerText === flippedCards[1].innerText) {
        flippedCards[0].style.backgroundColor = "lightgreen";
        flippedCards[1].style.backgroundColor = "lightgreen";
        score += 10;
        matchedPairs++;
    } else {
        flippedCards.forEach(card => {
            card.innerText = "";
            card.classList.remove("flipped");
        });
    }

    flippedCards = [];
    document.getElementById("score").innerText = score;

    if (matchedPairs === 8) {
        gameOver("You Win! 🎉");
    }
}

function updateTimer() {
    timer--;
    document.getElementById("timer").innerText = timer;
    if (timer === 0) {
        gameOver("Time's up! Try again. ⏳");
    }
}

function gameOver(message) {
    clearInterval(timerInterval);
    document.getElementById("game-over").innerText = message;
    document.getElementById("game-over").classList.remove("hidden");
    document.getElementById("restart-btn").classList.remove("hidden");
}

function restartGame() {
    document.getElementById("game-over").classList.add("hidden");
    document.getElementById("restart-btn").classList.add("hidden");
    startGame(Object.keys(categories)[0]); // Restart with first category
}
