console.log("PLN/EUR exchange");

let formElement = document.querySelector(".js-form");
let ratioElement = document.querySelector(".js-form__ratioEur");
let eurElement = document.querySelector(".js-form__amountEur");
let plnElement = document.querySelector(".js-form__amountPln");
let plnOptionElement = document.querySelector(".js-form__pln");
let eurOptionElement = document.querySelector(".js-form__eur");

formElement.addEventListener("input", () => {

    let ratio = ratioElement.value;
    let eur = eurElement.value;

    let plnAmount = eur / ratio;

    plnElement.value = `${plnAmount.toFixed(2)}`;

    let pln = plnOptionElement.value;
    let eurAmount = pln * ratio;

    eurOptionElement.value = `${eurAmount.toFixed(2)}`;
});