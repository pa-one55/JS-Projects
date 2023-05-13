const maxDecimal = 16777215;
const minDecimal = 0;

const generateSolidColor = () => {
    const color  = Math.floor(Math.random() * (maxDecimal - minDecimal)) + minDecimal;
    const hexCode = "#" + color.toString(16);
    document.body.style.backgroundColor = hexCode;
    document.getElementById("hex-code").innerText = hexCode;
}

document.getElementById("btn1").addEventListener(
    "click",
    generateSolidColor
)


generateSolidColor();