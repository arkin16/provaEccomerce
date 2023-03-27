import { ICategoria } from "../../Entitis/interfaceCategoria";

namespace Categorie {
    export async function get():Promise<ICategoria[]>{
        const apiCategorie:string = "http://82.59.202.23/northwindwebapi/api/categorie";      
        const response = await fetch(apiCategorie);
        const data:ICategoria[] = await response.json();
        return data

    }
}
export{Categorie}