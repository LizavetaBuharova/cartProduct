import { operation } from "./operation";

export default function counter() {
  document.querySelector(".add-goods").addEventListener("click", () => {
    operation("+");
  });
}
