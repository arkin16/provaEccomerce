import { getValueButton } from "../getValuebutton.js";
var Card;
(function (Card) {
    function generate(prodotti) {
        const cardContainer = document.getElementById("row-card");
        cardContainer.innerHTML = "";
        for (let i = 0; i < prodotti.length; i++) {
            const card = document.createElement("div");
            card.classList.add("col-md-4");
            card.classList.add("col-lg-3");
            card.classList.add("col-sm-12");
            card.innerHTML = `
        <div class="card border border-0  my-2 ">
          <img src="./assets/immagini/${(i % 6) + 1}.jpg" class="card-img-top" alt="${prodotti[i].productName}" />
          <div class="card-body">
            <p class="card-text m-0">Prodotto: ${prodotti[i].productName}</p>
            <p class="card-text m-0">Prezzo: ${prodotti[i].unitPrice} </p>
            <p class="card-text m-0">N. pezzi rimasti: ${prodotti[i].unitsInStock}</p>
          </div>
        </div>
      `;
            const button = document.createElement("button");
            button.value = prodotti[i].productId.toString();
            button.className = "d-flex justify-content-center m-0 a-card";
            button.innerHTML = "Aggiungi al carrello";
            button.onclick = getValueButton;
            card.appendChild(button);
            cardContainer.appendChild(card);
        }
    }
    Card.generate = generate;
})(Card || (Card = {}));
export { Card };
