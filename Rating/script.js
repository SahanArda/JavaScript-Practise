const mainContainer = document.querySelector(".main-container");
const thankyouContainer = document.querySelector(".thankyou-container");
const submitButton = document.querySelector("#submit");
const rateAgain = document.querySelector("#rate-again");
const rating = document.querySelector("#rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
    thankyouContainer.classList.remove("hidden");
    mainContainer.classList.add("hidden");
    // mainContainer.style.display = "none";
});

rateAgain.addEventListener("click", () => {
    thankyouContainer.classList.add("hidden");
    mainContainer.classList.remove("hidden");
    // mainContainer.style.display = "block";
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    });
});



