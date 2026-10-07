export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.closeButton = this.modal ? this.modal.querySelector(".modal__close") : null;
    this.overlay = this.modal ? this.modal.querySelector(".overlay") : null;

    this.initEvents();
  }

  // I. Открытие
  open() {
    if (this.modal) {
      this.modal.classList.add("modal-showed");
    }
  }

  // II. Закрытие
  close() {
    if (this.modal) {
      this.modal.classList.remove("modal-showed");
    }
  }

  // III. Проверка, открыто ли окно
  isOpen() {
    return this.modal ? this.modal.classList.contains("modal-showed") : false;
  }

  // IV. Слушатели событий
  initEvents() {
    if (this.closeButton) {
      this.closeButton.addEventListener("click", () => this.close());
    }
    if (this.overlay) {
      this.overlay.addEventListener("click", () => this.close());
    }
  }
}