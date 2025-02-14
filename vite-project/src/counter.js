export default function counter() {
  document.querySelector(".add-goods").addEventListener("click", () => {
    let num = document.querySelector(".count");
    let nameGoods = document.querySelector(".name-goods");
    let countPrice = document.querySelector(".count-price");
    let nameProduct = document.querySelector(".main-h1");
    let finalPrice = document.querySelector(".final-price");
    let newPrice = document.querySelector(".new-price");

    ++num.innerHTML;
    nameGoods.innerHTML = nameProduct.innerHTML;

    const textValue = newPrice.innerHTML;
    const numericString = textValue.replace("$", "");
   
    countPrice.innerHTML = "$" + (+numericString * (+num.innerHTML)).toFixed(2);
    finalPrice.innerHTML = countPrice.innerHTML;
  });
}
