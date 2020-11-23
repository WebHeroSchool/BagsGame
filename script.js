
// TODO При перевороте одной карты остальные не переворачивались 
// todo при перевороте была смена задней стороны карты

const cardWrap = document.querySelector('.card-game');
const gameStartButton = document.querySelector('.main__btn');
const levels = document.querySelectorAll('.nav__level');

// *Выбор уровня
function chooseLevel(event) {
  levels.forEach((item) => item.classList.remove('level__active'));
  event.currentTarget.classList.add('level__active');
};

levels.forEach((item) => item.addEventListener('click', chooseLevel));

function numberCards(currentLevel) {
  switch (currentLevel) {
    case 'simple':
      cardWrap.classList.add('three')
      return 3;
      break;
    case 'middle':
      cardWrap.classList.add('six')
      return 6;
      break;
    case 'hard':
      cardWrap.classList.add('ten')
      return 10;
      break;
  }
}

//* Создание карты
function createCard(currentLevelStart) {
  for (let i = 0; i < currentLevelStart; i++) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardBack = document.createElement('div');
    cardBack.classList.add('card__back');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card__front');

    cardWrap.append(card);
    card.append(cardBack);
    card.append(cardFront);

    // *Перезагрузка стриницы при клике
    cardBack.onclick = () => {
      location.reload()
    };

    // *Переворот карты при клике
    card.onclick = () => {
      card.style.transform = 'rotateY(180deg)';
    };
  };
};

//*Задняя сторона карты
function backSideOfCard(currentLevelStart) {
  let bug = Math.floor(Math.random() * currentLevelStart);
  const cardsBack = document.querySelectorAll('.card__back');

  for (let i = 0; i < currentLevelStart; i++) {
    if (i === bug) {
      cardsBack[i].classList.remove('card__back');
      cardsBack[i].classList.add('card__bug');
    }
  };
};

function startGame() {
  let currentLevel = document.querySelector('.level__active').firstElementChild.getAttribute('id');
  let currentLevelStart = numberCards(currentLevel);

  const section = document.querySelector('.main');
  section.classList.add('none');
  cardWrap.classList.remove('none');

  createCard(currentLevelStart);
  backSideOfCard(currentLevelStart);
};

gameStartButton.addEventListener('click', startGame);