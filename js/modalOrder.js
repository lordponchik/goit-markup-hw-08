export function renderOrder() {
  return `
    <button type="button" class="modal__button" data-modal-close>
          <svg class="modal__icon" width="18" height="18">
            <use href="./images/sprite.svg#icon-close-black"></use>
          </svg>
        </button>

    <p class="modal__title">Оставьте свои данные, мы вам перезвоним</p>
        <form class="modal-form">
          <div class="modal-group modal-form__group" data-tooltip="Имя должно быть размером от одного символа">
            <label class="modal-group__field">
              <span class="modal-group__label">Имя</span>
              <span class="modal-group__overlay">
                <input type="text" class="modal-group__input"  data-user-name name="user-name" placeholder=" " />
                <svg class="modal-group__icon">
                  <use href="./images/icon.svg#icon-person"></use>
                </svg>
              </span>
            </label>
          </div>

          <div class="modal-group modal-form__group" data-tooltip="Формат номера телефона: +38(***)*******">
            <label class="modal-group__field">
              <span class="modal-group__label">Телефон</span>
              <span class="modal-group__overlay">
                <input type="tel" class="modal-group__input" data-user-phone name="user-phone" placeholder=" " />
                <svg class="modal-group__icon">
                  <use href="./images/icon.svg#icon-phone"></use>
                </svg>
              </span>
            </label>
          </div>

          <div class="modal-group modal-form__group" data-tooltip="Формат номера телефона: XXXXXX@XX.XX">
            <label class="modal-group__field">
              <span class="modal-group__label">Почта</span>
              <span class="modal-group__overlay">
                <input type="email" class="modal-group__input" data-user-email name="user-email" placeholder=" " />
                <svg class="modal-group__icon">
                  <use href="./images/icon.svg#icon-email"></use>
                </svg>
              </span>
            </label>
          </div>

          <div class="modal-group modal-form__group" data-tooltip="Комментарий должен быть не меньше 5 символов">
            <label class="modal-group__field">
              <span class="modal-group__label">Комментарий</span>
              <textarea
                name="user-comment"
                placeholder="Введите текст"
                data-user-comment
                class="modal-group__input modal-group__input--comment"
              ></textarea>
            </label>
          </div>

          <div class="modal-group agreement modal-form__group">
            <label class="agreement__field">
              <input type="checkbox" name="agreement" data-user-agreement class="agreement__checkbox" />
              <span class="agreement__check">
                <svg class="agreement__icon">
                  <use href="./images/icon.svg#icon-chek-mark"></use>
                </svg>
              </span>
              <span class="agreement__text"
                >Соглашаюсь с рассылкой и принимаю
                <a href="" class="agreement__link" target="_blank" rel="noreferrer noopener"
                  >Условия договора</a
                ></span
              >
            </label>
          </div>

          <button type="submit" class="modal-form__btn" data-order-button>Отправить</button>
        </form>`;
}
