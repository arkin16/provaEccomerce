import { Filters } from "../Bl/filterProduct.js";
import { Product } from "../Bl/getProduct/getProduct.js";
import { IProductsTotal } from "../Entitis/interfaceProduct.js";
import { Card } from "./generate/generateCard.js";
import { ICategoria } from "../Entitis/interfaceCategoria.js";
import { Categorie } from "../Bl/getCategora/getCategoria.js";



window.addEventListener("load", async () => {
  const dataProducts: IProductsTotal[] = await Product.get();
  Motor.start(dataProducts);
});

let globalDataProducts: IProductsTotal[] = [];

namespace Motor {
  export async function start(dataProducts: IProductsTotal[]) {
    globalDataProducts = [...dataProducts]
    Card.generate(dataProducts);

    const categoria: ICategoria[] = await Categorie.get();

    const attivaCercaNome = document.getElementById(
      "attivaNome"
    ) as HTMLAnchorElement;
    const attivaCercaPrezzi = document.getElementById(
      "attivaPrezzo"
    ) as HTMLAnchorElement;
    const attivaCercaCategoria = document.getElementById(
      "attivaCategoria"
    ) as HTMLAnchorElement;

    const divNome = document.getElementById("cercaPerNome") as HTMLDivElement;
    const divPrezzo = document.getElementById(
      "cercaPerPrezzo"
    ) as HTMLDivElement;
    const divCategoria = document.getElementById(
      "cercaPerCategoria"
    ) as HTMLDivElement;

    const buttonCercaNome = document.getElementById(
      "cercaNome"
    ) as HTMLButtonElement;
    const buttonCercaPrezzo = document.getElementById(
      "cercaPrezzo"
    ) as HTMLButtonElement;
    const buttonCercaCategoria = document.getElementById(
      "cercaCategoria"
    ) as HTMLButtonElement;

    const inputNome = document.getElementById("nome") as HTMLInputElement;
    const inputPrezzoMin = document.getElementById(
      "prezzoMin"
    ) as HTMLInputElement;
    const inputPrezzoMax = document.getElementById(
      "prezzoMax"
    ) as HTMLInputElement;
    const select = document.getElementById(
      "selectCategory"
    ) as HTMLSelectElement;

      
    

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
      const prodottiFiltroPrezzo = Filters.Prezzo(
        Number(inputPrezzoMin.value),
        Number(inputPrezzoMax.value),
        dataProducts
      );
      Card.generate(prodottiFiltroPrezzo);
    });

    buttonCercaCategoria.addEventListener("click", () => {
      console.log(select.value)  
      const prodottiFiltroPrezzo = Filters.Categoria(
        select.value,
        dataProducts
      );
      Card.generate(prodottiFiltroPrezzo);
    });

  }

}
export namespace Prodotti{
  export function All():IProductsTotal[]{
    const dataProducts = [...globalDataProducts];
    return dataProducts;
  } 
}