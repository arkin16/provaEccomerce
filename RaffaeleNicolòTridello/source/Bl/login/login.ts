namespace Login {
    export async function get (){
    const apiLogin = "http://82.59.202.23/northwindwebapi/api/login"

    const response = await fetch(apiLogin, {
        headers:{ "Authorization": "Basic " + "Raffaele:Tridello"}
    });

    const data = await response.json();
    return data
}
}
export{Login}