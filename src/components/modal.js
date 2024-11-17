export function openModal(popup) {
    popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", handleEscClose);
}
  
export function closeModal(popup) {
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", handleEscClose);
}
  
export function handleEscClose(evt) {
    if (evt.key === "Escape") {
      const popupOpened = document.querySelector(".popup_is-opened");
      closeModal(popupOpened);
    }
}