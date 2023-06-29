import modal from "./modal.js";
import { renderOrder } from "./modalOrder.js";

const openModalBtn = document.querySelector("[data-modal-open]");

const modalOrder = new modal(openModalBtn, renderOrder());

modalOrder.openAddEvent();
