/**
 * Класс для управления модальным окном и общим оверлеем
 */
export class Modal {
    /**
     * Находит элементы в DOM, сохраняет ссылку на обработчик закрытия и инициализирует открытие
     */
    constructor(modalId, buttonId, shouldCloseOnOverlay) {
        this.modal = document.getElementById(modalId);
        this.overlay = document.getElementById('overlay');
        this.closeButton = this.modal.querySelector('.modal__close');
        this.shouldCloseOnOverlay = shouldCloseOnOverlay;

        /**
         * Единая функция-обработчик для закрытия окна (нужна для корректной работы removeEventListener)
         */
        this.handleClose = () => {
            this.close();
        };

        this.#initOpen(buttonId);
    }

    /**
     * Открывает модальное окно, показывает оверлей и вешает слушатели закрытия
     */
    open() {
        this.modal.classList.add('modal-showed');
        this.overlay.classList.add('overlay-showed');
        this.#initClose();
    }

    /**
     * Закрывает модальное окно, скрывает оверлей и удаляет слушатели событий
     */
    close() {
        this.modal.classList.remove('modal-showed');
        this.overlay.classList.remove('overlay-showed');

        this.closeButton.removeEventListener('click', this.handleClose);

        if (this.shouldCloseOnOverlay) {
            this.overlay.removeEventListener('click', this.handleClose);
        }
    }

    /**
     * Проверяет, открыто ли модальное окно в текущий момент
     */
    isOpen() {
        return this.modal.classList.contains('modal-showed');
    }

    /**
     * Вешает слушатель клика на кнопку открытия модального окна
     */
    #initOpen(buttonId) {
        const button = document.getElementById(buttonId);
        button.addEventListener('click', () => {
            this.open();
        });
    }

    /**
     * Добавляет слушатели событий для закрытия модального окна (на крестик и оверлей)
     */
    #initClose() {
        this.closeButton.addEventListener('click', this.handleClose);

        if (this.shouldCloseOnOverlay) {
            this.overlay.addEventListener('click', this.handleClose);
        }
    }
}