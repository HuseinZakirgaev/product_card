export class Form {
  constructor(formId) {
    // ТЗ: принимает 1 параметр - айди формы
    this.form = document.getElementById(formId);
  }

  // I. Получение всех значений формы
  getData() {
    if (!this.form) return null;
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  // II. Проверка валидности (возвращает true/false)
  isValid() {
    if (!this.form) return false;
    if (!this.form.checkValidity()) {
      this.form.reportValidity();
      return false;
    }
    return true;
  }

  // III. Сброс значений формы
  reset() {
    if (this.form) {
      this.form.reset();
    }
  }
}