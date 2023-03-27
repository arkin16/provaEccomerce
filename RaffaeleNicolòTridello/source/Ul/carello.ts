import { Login } from "../Bl/login/login.js"

window.addEventListener("load", async() => {
if (localStorage.getItem("token") === null){
    const token = await Login.get()
    localStorage.setItem("token", token)
}    
});


