import { operation } from "./operation";

export default function buttonMenu() {
  document.querySelector(".plus").addEventListener("click", () => {
    operation("+");
  });

  document.querySelector(".minus").addEventListener("click", () => {
    operation("-");
  });
}
