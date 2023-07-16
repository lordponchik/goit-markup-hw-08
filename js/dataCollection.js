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
});

function checkOrder() {
  const submitOrder = document.querySelector("[data-order-button]");
  submitOrder.setAttribute("disabled", "disabled");

  submitOrder.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hier");
  });
}
