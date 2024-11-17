const content = document.querySelector('.content');
const cardList = document.querySelector('.places__list');

export function createCard(cardTitle, cardImage, deletedCard) {
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

export const removeCard = removeCard = (event) => {
    const item = event.target.closest('.card');
    item.remove();
};

export const likeCard = initialCards.forEach(function ({name, link}) {
    const cardData = createCard(name, link, deleteCard);
    cardList.append(cardData);
});