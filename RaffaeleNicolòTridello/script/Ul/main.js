var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Filters } from "../Bl/filterProduct.js";
import { Product } from "../Bl/getProduct/getProduct.js";
import { Card } from "./generate/generateCard.js";
import { Categorie } from "../Bl/getCategora/getCategoria.js";
window.addEventListener("load", () => __awaiter(void 0, void 0, void 0, function* () {
    const dataProducts = yield Product.get();
    Motor.start(dataProducts);
    Prodotti.All();
}));
var Motor;
(function (Motor) {
    function start(dataProducts) {
        return __awaiter(this, void 0, void 0, function* () {
            Card.generate(dataProducts);
            const categoria = yield Categorie.get();
            const attivaCercaNome = document.getElementById("attivaNome");
            const attivaCercaPrezzi = document.getElementById("attivaPrezzo");
            const attivaCercaCategoria = document.getElementById("attivaCategoria");
            const divNome = document.getElementById("cercaPerNome");
            const divPrezzo = document.getElementById("cercaPerPrezzo");
            const divCategoria = document.getElementById("cercaPerCategoria");
            const buttonCercaNome = document.getElementById("cercaNome");
            const buttonCercaPrezzo = document.getElementById("cercaPrezzo");
            const buttonCercaCategoria = document.getElementById("cercaCategoria");
            const inputNome = document.getElementById("nome");
            const inputPrezzoMin = document.getElementById("prezzoMin");
            const inputPrezzoMax = document.getElementById("prezzoMax");
            const select = document.getElementById("selectCategory");
            attivaCercaNome.addEventListener("click", () => {
                divNome.style.display = "inline-block";
                divPrezzo.style.display = "none";
                divCategoria.style.display = "none";
            });
            attivaCercaPrezzi.addEventListener("click", () => {
                divNome.style.display = "none";
                divPrezzo.style.display = "inline-block";
                divCategoria.style.display = "none";
            });
            attivaCercaCategoria.addEventListener("click", () => {
                divNome.style.display = "none";
                divPrezzo.style.display = "none";
                divCategoria.style.display = "inline-block";
                categoria.creaOptions(select, "categoryId", "categoryName");
            });
            buttonCercaNome.addEventListener("click", () => {
                const prodottiFiltroNome = Filters.Nome(inputNome.value, dataProducts);
                Card.generate(prodottiFiltroNome);
            });
            buttonCercaPrezzo.addEventListener("click", () => {
                const prodottiFiltroPrezzo = Filters.Prezzo(Number(inputPrezzoMin.value), Number(inputPrezzoMax.value), dataProducts);
                Card.generate(prodottiFiltroPrezzo);
            });
            buttonCercaCategoria.addEventListener("click", () => {
                console.log(select.value);
                const prodottiFiltroPrezzo = Filters.Categoria(select.value, dataProducts);
                Card.generate(prodottiFiltroPrezzo);
            });
        });
    }
    Motor.start = start;
})(Motor || (Motor = {}));
export var Prodotti;
(function (Prodotti) {
    function All(dataProducts) {
        return dataProducts;
    }
    Prodotti.All = All;
})(Prodotti || (Prodotti = {}));
