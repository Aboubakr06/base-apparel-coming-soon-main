/*<script src="script.js"></script>*/

let EmailInp = document.getElementById("email-inp");
let EmailCont = document.querySelector(".email");
let ErrorEl = document.querySelector(".error");
let ErrorMsg = document.querySelector(".error-msg");
let ValidMsg = document.querySelector(".valid-msg");
let ButtonEl = document.getElementById("button");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

ButtonEl.addEventListener("click", function () {
    checkEmail()
});

function checkEmail() {
    if (!EmailInp.value.match(mailformat)) {
        EmailCont.style.border = "1px solid red";
        ErrorEl.style.display = "block";
        ErrorMsg.style.display = "block";
        ValidMsg.style.display = "none";
    } else {
        EmailCont.style.border = "1px solid var(--clr-primary-300)";
        ErrorEl.style.display = "none";
        ErrorMsg.style.display = "none";
        ValidMsg.style.display = "block";
    }
}
