export function plus() {
  let num = document.querySelector(".count");
  let nameGoods = document.querySelector(".name-goods");
  let countPrice = document.querySelector(".count-price");
  let finalPrice = document.querySelector(".final-price");
  let newPrice = document.querySelector(".new-price");
  let plus = document.querySelector(".plus");
  let minus = document.querySelector(".minus");
  let nameProduct = document.querySelector(".main-h1");

  () => {
    ++num.innerHTML;
    nameGoods.innerHTML = nameProduct.innerHTML;
    const textValue = newPrice.innerHTML;
    const numericString = textValue.replace("$", "");
    countPrice.innerHTML = "$" + (+numericString * +num.innerHTML).toFixed(2);
    finalPrice.innerHTML = countPrice.innerHTML;
  }
}
