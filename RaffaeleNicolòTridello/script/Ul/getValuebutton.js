import { Prodotti } from "./main.js";
import { Filters } from "../Bl/filterProduct.js";
function getValueButton(event) {
    const target = event.target;
    console.log(target.value);
    const allProdocts = Prodotti.All();
    const data = Filters.ProdottiPost();
}
export { getValueButton };
