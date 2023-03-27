Array.prototype.creaOptions = function (select:HTMLSelectElement, key:string, value:string):void {
    for (let i = 0; i < this.length; i++) {
        const option = document.createElement("option") as HTMLOptionElement;
        const testo = document.createTextNode(this[i][value]) as Text;
        option.appendChild(testo);
        option.setAttribute("value", this[i][key]);
        select.appendChild(option);
    }
  };