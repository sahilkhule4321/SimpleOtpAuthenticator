const data = document.getElementById("otp");
const userOtp = document.getElementById("userotp");

let otp;

function generateOtp() {
    otp = Math.floor(Math.random() * 10000) + 1;
    data.textContent = otp;
}

function checkOtp() {
    const inp = Number(userOtp.value);

    if (inp === otp) {
        alert("login Successful");
    } else {
        alert("Wrong otp");
    }
}