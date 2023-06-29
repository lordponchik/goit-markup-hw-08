import modal from "./modal.js";
import { renderOrder } from "./modalOrder.js";
import { renderSubscribe } from "./modalSubscribe.js";

const openOrderBtn = document.querySelector("[data-order-open]");
const subscribeButton = document.querySelector("[data-subscribe-button]");

const modalOrder = new modal(openOrderBtn, renderOrder());
const modalSubscribe = new modal(subscribeButton, renderSubscribe());

modalSubscribe.openAddEvent();
modalOrder.openAddEvent();
