{
    const welcome = () => console.log("PLN/EUR exchange");


    const plnResult = (plnAmount) => {
        const plnElement = document.querySelector(".js-form__amountPln");

        plnElement.value = `${plnAmount.toFixed(2)}`;
    }

    const eurResult = (eurAmount) => {
        const eurOptionElement = document.querySelector(".js-form__eur");

        eurOptionElement.value = `${eurAmount.toFixed(2)}`;
    }

    const exchange = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", () => {
            const ratioElement = document.querySelector(".js-form__ratioEur");
            const eurElement = document.querySelector(".js-form__amountEur");
            const plnOptionElement = document.querySelector(".js-form__pln");

            const ratio = ratioElement.value;
            const eur = eurElement.value;

            const plnAmount = eur / ratio;

            const pln = plnOptionElement.value;
            const eurAmount = pln * ratio;

            eurResult(eurAmount);
            plnResult(plnAmount);
        });

    }
    welcome();
    exchange();
}