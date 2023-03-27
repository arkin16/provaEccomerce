interface IProductId {
  productId: number;
}

interface IProducts {
  productName: string;
  categoryId: string;
  unitPrice: number;
  unitsInStock: number;
  discontinued: boolean;
}

interface IProductsTotal extends IProductId,IProducts {

}

export{IProductId,IProducts,IProductsTotal}