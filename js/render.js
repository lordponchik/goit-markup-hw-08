import modal from "./modal.js";
import { renderOrder } from "./modalOrder.js";
import { renderSubscribe } from "./modalSubscribe.js";

const openOrderBtn = document.querySelector("[data-order-open]");
const subscribeButton = document.querySelector("[data-subscribe-button]");

const modalOrder = new modal(openOrderBtn, renderOrder());
const modalSubscribe = new modal(subscribeButton, renderSubscribe());

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const subInputEl = document.querySelector(".mailing-form__input");
let emailUser = "";

subInputEl.addEventListener("input", onInput);
subscribeButton.setAttribute("disabled", "disabled");

function onInput() {
  if (isEmailValid(subInputEl.value)) {
    subscribeButton.classList.add("mailing-form__btn--resolved");
    subInputEl.style.borderColor = "green";
    subscribeButton.removeAttribute("disabled");
  } else {
    subscribeButton.classList.remove("mailing-form__btn--resolved");
    subInputEl.style.borderColor = "red";
    subscribeButton.setAttribute("disabled", "disabled");
  }
}

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

subscribeButton.addEventListener("click", (e) => {
  e.preventDefault();

  subInputEl.style.borderColor = "";
  emailUser = subInputEl.value;
  subInputEl.value = "";

  e.currentTarget.classList.remove("mailing-form__btn--resolved");
  e.currentTarget.setAttribute("disabled", "disabled");
});

modalSubscribe.openAddEvent();
modalOrder.openAddEvent();
