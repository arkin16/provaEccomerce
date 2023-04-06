
import { CarelloSever } from "../Bl/postProduct/postProduct.js";
import { Prodotti } from "./main.js";
import { Filters } from "../Bl/filterProduct.js";

function getValueButton(event: MouseEvent){
 const target = event.target as HTMLButtonElement;
 console.log(target.value);
 const allProdocts = Prodotti.All();
 
 const data = Filters.ProdottiPost(Number(target.value), allProdocts); 
 CarelloSever.post(data)   
}

export{getValueButton}