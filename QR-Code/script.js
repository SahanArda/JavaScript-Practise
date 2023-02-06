const container = document.querySelector(".container");
const qrInput = container.querySelector(".form input");
const generateBtn = container.querySelector(".form button");
const qrImg = container.querySelector(".qr-code img");


generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        container.classList.add("active");
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        container.classList.remove("active");
    }
});