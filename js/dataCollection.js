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

function checkOrderVisible() {
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
  submitOrder.setAttribute("disabled", "disabled");

  submitOrder.addEventListener("click", (e) => {
    e.preventDefault();
  });
}

function userAgreementCheck(e) {
  if (e.target.checked) {
    checkOrderVisible();
  } else {
    checkOrderVisible();
  }
}

function userNameCheck(e) {
  if (e.target.value.trim().length !== 0) {
    e.target.style.borderColor = "green";
    checkOrderVisible();
  } else {
    e.target.style.borderColor = "red";
    checkOrderVisible();
  }
}

function userPhoneCheck(e) {
  if (isPhoneValid(e.target.value)) {
    e.target.style.borderColor = "green";
    checkOrderVisible();
  } else {
    e.target.style.borderColor = "red";
    checkOrderVisible();
  }
}

function userCommentCheck(e) {
  if (e.target.value.trim().length > 5) {
    e.target.style.borderColor = "green";
    checkOrderVisible();
  } else {
    e.target.style.borderColor = "red";
    checkOrderVisible();
  }
}

function userMailCheck(e) {
  if (isEmailValid(e.target.value)) {
    e.target.style.borderColor = "green";
    checkOrderVisible();
  } else {
    e.target.style.borderColor = "red";
    checkOrderVisible();
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
