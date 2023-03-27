import { IProductsPost } from "../../Entitis/InterfarcePostProduct";

namespace CarelloSever{
    export async function post(){
    const apiPostCarello = "http://82.59.202.23/northwindwebapi/api/Carrello/"
    const notsicuretoken = localStorage.getItem("token"); 
    const token = notsicuretoken as string

    const prodotto:IProductsPost = {
        idProdotto: 1,
        prodotto: "pippo",
        prezzo: 1,
        quantita:1,
        idcarrello:0,
        cliente: token
    }     

    const response = await fetch(apiPostCarello, {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(prodotto)
    })

    console.log (response.json)
    }
}

export{CarelloSever}