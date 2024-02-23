let btn = document.querySelector(`#btn`);

let calculate = () => {
    let sum = document.querySelector(`#sum`).value;
    let vat = document.querySelector(`#VAT`).value;
    let field = document.querySelector(`#field`).value;
    let pnetto = document.querySelector(`#pnetto`);
    let pvat = document.querySelector(`#pvat`);
    let pbrutto = document.querySelector('#pbrutto');

    let netto,brutto,vatValue;

    vat = (vat / 100) + 1;

    if (sum === "netto") {
        let netto = field;
        let brutto = field * vat;
        let vatValue = brutto - netto;

        write(netto, brutto, vatValue);
    } else if (sum === "brutto") {
        let brutto = field; 
        let netto = brutto / vat;
        let vatValue = brutto - netto;

        write(netto, brutto, vatValue);
    }
};

let write = (netto, brutto, vatValue) =>{
    pnetto.innerHTML = Math.round(netto * 100) / 100 + " zł";
    pbrutto.innerHTML = Math.round(brutto * 100) / 100 + " zł";
    pvat.innerHTML = Math.round(vatValue * 100) / 100 + " zł";
}

btn.addEventListener(`click`, calculate);
