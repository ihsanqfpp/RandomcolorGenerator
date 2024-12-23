const getcolor = () => {

    const randomNumber = Math.floor(Math.random() * 16777215);
const randomCode = "#" + randomNumber.toString(16).padStart(6, '0'); // Combine "#" with the hexadecimal string
console.log(randomNumber, randomCode);
document.body.style.backgroundColor = randomCode;
document.getElementById("color").innerText = randomCode;

navigator.clipboard.writeText(randomCode)
}
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
getcolor();