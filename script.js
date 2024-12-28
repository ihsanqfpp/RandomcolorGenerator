const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color").innerText = randomCode;

    navigator.clipboard.writeText(randomCode).then(() => {
        const notice = document.querySelector(".copy-notice");
        notice.style.display = "block";
        setTimeout(() => {
            notice.style.display = "none";
        }, 2000);
    });
};

document.getElementById("btn").addEventListener("click", getColor);

// Initial call
getColor();
