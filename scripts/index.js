const cardTemplate = document.querySelector('#card-template').content;

const content = document.querySelector('.content');
const cardList = document.querySelector('.places__list');

function createCard(cardTitle, cardImage, deletedCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImg = cardElement.querySelector(".card__image");
    cardElement.querySelector('.card__title').textContent = cardTitle;
    cardImg.alt = cardTitle;
    cardImg.src = cardImage;
    const deleteButton = cardElement.querySelector('.card__delete-button');
        deleteButton.addEventListener('click', (evt) => {
            deletedCard(evt);
        });
        return cardElement;
};

const deleteCard = (event) => {
    const item = event.target.closest('.card');
    item.remove();
};

initialCards.forEach(function ({name, link}) {
    const cardData = createCard(name, link, deleteCard);
    cardList.append(cardData);
});
