import modal from "./modal.js";

const refsInput = {
  userName: null,
  userPhone: null,
  userMail: null,
  userComment: null,
  userAgreement: null,
};

let isValidForm = null;

const orderOpenEl = document.querySelector("[data-order-open]");

orderOpenEl.addEventListener("click", (e) => {
  refsInput.userName = document.querySelector("[data-user-name]");
  refsInput.userPhone = document.querySelector("[data-user-phone]");
  refsInput.userMail = document.querySelector("[data-user-email]");
  refsInput.userComment = document.querySelector("[data-user-comment]");
  refsInput.userAgreement = document.querySelector("[data-user-agreement]");

  checkOrder();

  refsInput.userName.addEventListener("input", userNameCheck);
  refsInput.userPhone.addEventListener("input", userPhoneCheck);
  refsInput.userMail.addEventListener("input", userMailCheck);
  refsInput.userComment.addEventListener("input", userCommentCheck);
  refsInput.userAgreement.addEventListener("change", userAgreementCheck);
});

function isFormCompleted() {
  isValidForm =
    refsInput.userName.value.trim().length !== 0 &&
    isPhoneValid(refsInput.userPhone.value) &&
    isEmailValid(refsInput.userMail.value) &&
    refsInput.userComment.value.trim().length > 5 &&
    refsInput.userAgreement.checked;

  const submitOrder = document.querySelector("[data-order-button]");

  if (isValidForm) {
    submitOrder.removeAttribute("disabled");
    submitOrder.classList.add("modal-form__btn--resolved");
  } else {
    submitOrder.setAttribute("disabled", "disabled");
    submitOrder.classList.remove("modal-form__btn--resolved");
  }
}

function checkOrder() {
  const submitOrder = document.querySelector("[data-order-button]");
  const order = new modal(submitOrder, renderMessage());
  submitOrder.setAttribute("disabled", "disabled");
  submitOrder.addEventListener("click", (e) => {
    e.preventDefault();
    order.toggleModal();
    order.modal.innerHTML = "";

    setTimeout(() => {
      order.render();
      order.toggleModal();

      setTimeout(() => {
        order.toggleModal();
        order.modal.innerHTML = "";
      }, 1500);
    }, 1000);
  });
}

function userAgreementCheck(e) {
  if (e.target.checked) {
    isFormCompleted();
  } else {
    isFormCompleted();
  }
}

function userNameCheck(e) {
  if (e.target.value.trim().length !== 0) {
    e.target.style.borderColor = "green";
    isFormCompleted();
  } else {
    e.target.style.borderColor = "red";
    isFormCompleted();
  }
}

function userPhoneCheck(e) {
  if (isPhoneValid(e.target.value)) {
    e.target.style.borderColor = "green";
    isFormCompleted();
  } else {
    e.target.style.borderColor = "red";
    isFormCompleted();
  }
}

function userCommentCheck(e) {
  if (e.target.value.trim().length > 5) {
    e.target.style.borderColor = "green";
    isFormCompleted();
  } else {
    e.target.style.borderColor = "red";
    isFormCompleted();
  }
}

function userMailCheck(e) {
  if (isEmailValid(e.target.value)) {
    e.target.style.borderColor = "green";
    isFormCompleted();
  } else {
    e.target.style.borderColor = "red";
    isFormCompleted();
  }
}
function isEmailValid(value) {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return EMAIL_REGEXP.test(value);
}

function isPhoneValid(value) {
  const PHONE_REGEXP = /\+38\(\d{3}\)\d{3}\d{2}\d{2}$/iu;
  return PHONE_REGEXP.test(value);
}
function renderMessage() {
  return `
         <p class="modal__title">Мы свяжемся с вами в ближайшее время!</p>
`;
}
