import { IProductsTotal } from "../Entitis/interfaceProduct.js";

namespace Filters {
  export function Nome(
    nome: string,
    prodotti: IProductsTotal[]
  ): IProductsTotal[] {
    let prodottiFiltroNome: IProductsTotal[] = prodotti.filter((element) => {
      const toUpperCaseElement = element.productName.toLowerCase();
      const toUpperCaseNome = nome.toLowerCase();

      return toUpperCaseElement.includes(toUpperCaseNome);
    });
    return prodottiFiltroNome;
  }

  export function Prezzo(
    prezzoMin: number,
    prezzoMax: number,
    prodotti: IProductsTotal[]
  ): IProductsTotal[] {

    let prodottiFiltroPrezzo: IProductsTotal[] = prodotti.filter((element) => {
    return element.unitPrice >= prezzoMin && element.unitPrice <= prezzoMax;
    });
    return prodottiFiltroPrezzo
  }

  export function Categoria(
    id: string,
    prodotti: IProductsTotal[]
  ): IProductsTotal[] {
    let tmpData = prodotti.filter((element) => {
      return id.toString() == element.categoryId;
    });
    return tmpData;
  }

  export function ProdottiPost(id:number, prodotti:IProductsTotal[]){
    let tmpData = prodotti.filter((element) => {
      return id.toString() == element.categoryId;
    });
    return tmpData;
  }
}


export { Filters };
