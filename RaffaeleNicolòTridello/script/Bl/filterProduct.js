var Filters;
(function (Filters) {
    function Nome(nome, prodotti) {
        let prodottiFiltroNome = prodotti.filter((element) => {
            const toUpperCaseElement = element.productName.toLowerCase();
            const toUpperCaseNome = nome.toLowerCase();
            return toUpperCaseElement.includes(toUpperCaseNome);
        });
        return prodottiFiltroNome;
    }
    Filters.Nome = Nome;
    function Prezzo(prezzoMin, prezzoMax, prodotti) {
        let prodottiFiltroPrezzo = prodotti.filter((element) => {
            return element.unitPrice >= prezzoMin && element.unitPrice <= prezzoMax;
        });
        return prodottiFiltroPrezzo;
    }
    Filters.Prezzo = Prezzo;
    function Categoria(id, prodotti) {
        let tmpData = prodotti.filter((element) => {
            return id.toString() == element.categoryId;
        });
        return tmpData;
    }
    Filters.Categoria = Categoria;
    function ProdottiPost(id) {
        let tmpData = prodotti.filter((element) => {
            return id.toString() == element.categoryId;
        });
        return tmpData;
    }
    Filters.ProdottiPost = ProdottiPost;
})(Filters || (Filters = {}));
export { Filters };
