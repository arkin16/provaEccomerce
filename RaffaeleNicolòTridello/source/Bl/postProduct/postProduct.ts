import { IProductsPost } from "../../Entitis/InterfarcePostProduct";
import { IProductsTotal } from "../../Entitis/interfaceProduct";
namespace CarelloSever{
    export async function post(prodotto:IProductsTotal){
    const apiPostCarello = "http://82.59.202.23/northwindwebapi/api/Carrello/"
    const notsicuretoken = localStorage.getItem("token"); 
    const token = notsicuretoken as string

       

    const Prodotto:IProductsPost = {
        idProdotto: prodotto.productId,
        prodotto: prodotto.productName,
        prezzo: prodotto.unitPrice,
        quantita:1,
        idcarrello:0,
        cliente: token
    }     

    const response = await fetch(apiPostCarello, {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(Prodotto)
    })

    console.log (response.json)
    }
}

export{CarelloSever}