
let levelLight = document.getElementById('light');
let levelMiddle = document.getElementById('middle');
let levelHard = document.getElementById('hard');
let cardsNumber;


function clickMenu(light, middle, hard) {

    light.onclick = () => {
        cardsNumber = 3;
    }

    middle.onclick = () => {
        cardsNumber = 6;
    }

    hard.onclick = () => {
        cardsNumber = 9;
    }
}

console.log(clickMenu(levelLight, levelMiddle, levelHard));

//Рандомное число
function cardRandom() {
    return Math.floor(Math.random() * 10);
}
console.log(cardRandom());

// Создание карты
let cardWrap = document.getElementById('card-game');

for (let i = 0; i < 9; i++) {

    let card = document.createElement("div");
    card.classList.add("card");

    let cardFront = document.createElement('div');
    cardFront.classList.add('card__front');

    //Вставка
    card.prepend(cardFront)
    cardWrap.prepend(card);

    let cardBack = document.createElement('div');
    if (5 < cardRandom()) {
        cardBack.classList.add('card__bag')
    } else if (5 > cardRandom()) {
        cardBack.classList.add('card__game-over')
    };


    //Вставка
    card.prepend(cardBack)

    // Перезагрузка стриницы при клике
    cardBack.onclick = () => {
        location.reload()
    };

    // Переворот карты при клике
    card.onclick = () => {
        card.style.transform = 'rotateY(180deg)';
    }
}

//Скрытие карты
cardWrap.style.display = "none";

// Скрытие всех элементов при клике на кнопку и появление карт
document.getElementById('button').onclick = function() {
    document.getElementById('section').hidden = true;
    cardWrap.style.display = "flex";
}