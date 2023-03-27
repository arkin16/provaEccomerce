var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var CarelloSever;
(function (CarelloSever) {
    function post() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPostCarello = "http://82.59.202.23/northwindwebapi/api/Carrello/";
            const notsicuretoken = localStorage.getItem("token");
            const token = notsicuretoken;
            const prodotto = {
                idProdotto: 1,
                prodotto: "pippo",
                prezzo: 1,
                quantita: 1,
                idcarrello: 0,
                cliente: token
            };
            const response = yield fetch(apiPostCarello, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(prodotto)
            });
            console.log(response.json);
        });
    }
    CarelloSever.post = post;
})(CarelloSever || (CarelloSever = {}));
export { CarelloSever };
