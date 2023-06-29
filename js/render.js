import modal from "./modal.js";
import { renderOrder } from "./modalOrder.js";

const openOrderBtn = document.querySelector("[data-order-open]");

const modalOrder = new modal(openOrderBtn, renderOrder());

modalOrder.openAddEvent();
