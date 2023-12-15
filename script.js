const ideas = [
    "Questing Marathon",
    "Resource Gathering",
    "Combat Training",
    "Skilling Grind",
    "Unique Achievement Hunt",
    "Boss Encounter",
    "Treasure Trails Hunt",
    "Mini-game Mastery",
    "Clue Scroll Challenge",
    "Ironman Group Activity",
    "Pet Collection",
    "Money-Making Method",
    "Crafting Focus",
    "Achievement Diary Completion",
    "PvP Adventure"
];

let currentCard = 0;

function flipCard() {
    const card = document.querySelector('.card');
    const cardFront = document.querySelector('.card-front');
    const cardBack = document.querySelector('.card-back');

    if (currentCard < ideas.length) {
        cardFront.textContent = "Idea: " + ideas[currentCard];
        currentCard++;
    } else {
        cardFront.textContent = "No more ideas!";
    }

    card.style.transform = "rotateY(0deg)";
}
