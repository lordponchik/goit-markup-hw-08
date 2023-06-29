export default class modal {
  constructor(btnOpen, data) {
    this.data = data;
    this.openModalBtn = btnOpen;
    this.backdrop = document.querySelector(".backdrop");
    this.modal = document.querySelector(".modal");
    this.closeModalBtn;
  }
  toggleModal() {
    document.body.classList.toggle("modal-open");
    this.backdrop.classList.toggle("is-hidden");
  }
  render() {
    this.modal.insertAdjacentHTML("beforeend", this.data);
  }
  openAddEvent() {
    this.openModalBtn.addEventListener("click", () => {
      this.render();
      this.toggleModal();
      this.closeAddEvent();
    });
  }
  closeAddEvent() {
    this.closeModalBtn = document.querySelector("[data-modal-close]");
    this.closeModalBtn.addEventListener("click", () => {
      this.toggleModal();
      this.modal.innerHTML = "";
    });
  }
}
