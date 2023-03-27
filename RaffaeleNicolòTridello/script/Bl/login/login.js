var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Login;
(function (Login) {
    function get() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiLogin = "http://82.59.202.23/northwindwebapi/api/login";
            const response = yield fetch(apiLogin, {
                headers: { "Authorization": "Basic " + "Raffaele:Tridello" }
            });
            const data = yield response.json();
            return data;
        });
    }
    Login.get = get;
})(Login || (Login = {}));
export { Login };
