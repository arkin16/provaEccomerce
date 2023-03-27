import { IProductsTotal } from "../../Entitis/interfaceProduct";

namespace Product {
    export async function get():Promise<IProductsTotal[]>{
        const apiProducts:string = "http://82.59.202.23/northwindwebapi/api/prodotti";      
        const response = await fetch(apiProducts);
        const data: IProductsTotal[] = await response.json();
        return data

    }
}

export{Product};