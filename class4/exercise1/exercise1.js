const button = document.querySelector(".btn_onclick")

function changeColors() {
    const randomBackgroundColor = Math.floor(Math.random() * 16777215).toString(16);
    const randomTextColor = Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = `#${randomBackgroundColor}`;
    document.body.style.color = `#${randomTextColor}`
}

    const buttonEvent = document.querySelector(".btn_onclick");
    buttonEvent.addEventListener("click", changeColors);