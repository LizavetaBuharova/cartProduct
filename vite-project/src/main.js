import "./style.css";
import javascriptLogo from "./Bitmap.png";
import viteLogo from "/Cart.svg";
import setColors from "./colors";
import counter from "./counter.js"
import buttonMenu from "./buttomNum.js";

document.querySelector("#app").innerHTML = `
  <div class="window-shopping">
    <div class="empty"></div>
    <div class="block-card">
      <div class="set-colors">
        <button type="submit" id="green"></button>
        <button type="submit" id="grey"></button>
        <button type="submit" id="black"></button>
      </div>
      <div class="card">
        <div class="photo">
          <img src="${javascriptLogo}" widtzh="305.69" height="450" />
        </div>
        <div class="info">
          <p class="perf">PERFUME</p>
          <h1 class="main-h1">Gabrielle Essence Eau De Parfum</h1>
          <p class="text">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div class="price">
            <p class="new-price">$149.99</p>
            <p class="old-price">$169.99</p>
          </div>
          <button type="submit" class="add-goods">
            <div class="butt">
              <img src=${viteLogo} width="14.39" height="16" />
              <p>Add to Cart</p>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="shopping-card">
      <h1>Total</h1>
      <div class="shopping-items">
        <p class="name-goods">Nothing</p>
        <p class="discount"></p>
        <button type="submit" class="count-bottom minus">-</button>
        <p class="discount count">0</p>
        <button type="submit" class="count-bottom plus">+</button>
        <p class="discount count-price">$0</p>
      </div>
      <div class="final-price">$0</div>
    </div>
  </div>
`
setColors();
counter();
buttonMenu();
