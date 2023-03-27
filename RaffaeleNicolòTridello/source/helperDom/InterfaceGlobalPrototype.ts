export{};

declare global {
    interface Array<T>{
        creaOptions(select:HTMLSelectElement, key:string, value:string):void
    }
}