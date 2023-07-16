const refsInput = {
  userName: null,
  userPhone: null,
  userMail: null,
  userComment: null,
  userAgreement: null,
};

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
});

function checkOrder() {
  const submitOrder = document.querySelector("[data-order-button]");
  submitOrder.setAttribute("disabled", "disabled");

  submitOrder.addEventListener("click", (e) => {
    e.preventDefault();
  });
}

function userNameCheck(e) {
  if (e.target.value.trim().length !== 0) {
    e.target.style.borderColor = "green";
  } else {
    e.target.style.borderColor = "red";
  }
}
function userPhoneCheck(e) {
  const PHONE_REGEXP = /\+38\(\d{3}\)\d{3}\d{2}\d{2}$/iu;

  if (isEmailValid(e.target.value)) {
    e.target.style.borderColor = "green";
  } else {
    e.target.style.borderColor = "red";
  }
  function isEmailValid(value) {
    return PHONE_REGEXP.test(value);
  }
}

function userCommentCheck(e) {
  if (e.target.value.trim().length > 5) {
    e.target.style.borderColor = "green";
  } else {
    e.target.style.borderColor = "red";
  }
}

function userMailCheck(e) {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  if (isEmailValid(e.target.value)) {
    e.target.style.borderColor = "green";
  } else {
    e.target.style.borderColor = "red";
  }
  function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
  }
}
