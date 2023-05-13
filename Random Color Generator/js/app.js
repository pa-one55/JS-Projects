const maxDecimal = 16777215;
const minDecimal = 0;

const generateSolidColor = () => {
    const color  = Math.floor(Math.random() * (maxDecimal - minDecimal)) + minDecimal;
    const hexCode = "#" + color.toString(16);
    document.getElementById("solid-box").style.backgroundColor = hexCode;
    document.getElementById("hex-code").innerText = hexCode;
}

const generateGrad = () => {
    const color1  = Math.floor(Math.random() * (maxDecimal - minDecimal)) + minDecimal;
    const hexCode1 = "#" + color1.toString(16);
    const color2  = Math.floor(Math.random() * (maxDecimal - minDecimal)) + minDecimal;
    const hexCode2 = "#" + color2.toString(16);
    const box2 = document.getElementById("grad-color"); 
    document.getElementById("grad-color").style.background = "linear-gradient(to right, " + hexCode1 + ", " + hexCode2 + ")";
    document.getElementById("hex-code").innerText = hexCode1 + " , " +  hexCode2 ;
    console.log(hexCode1, hexCode2);
}


document.getElementById("btn1").addEventListener(
    "click",
    generateSolidColor
)

document.getElementById("btn2").addEventListener(
    "click",
    generateGrad
)

generateSolidColor();
generateGrad();