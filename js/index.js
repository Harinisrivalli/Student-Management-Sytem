
var runame = "";
var rname = "";
var rpwd = "";

function store(event) {
    event.preventDefault(); 
    runame = document.getElementById("runame").value;
    rname = document.getElementById("rname").value;
    rpwd = document.getElementById("rpwd").value;
    localStorage.setItem("uname",runame);
    localStorage.setItem("password",rpwd);
    alert("Register Success!!!");
    window.location.href = "home.html"; 
}

function validate(event) {
    event.preventDefault(); 
    var lpwd = document.getElementById("lpwd").value;
    var lname = document.getElementById("lname").value;

    if (lname === localStorage.getItem("uname") && lpwd === localStorage.getItem("password")) {
        alert("Login Success!!!");
        window.location.href = "home.html";
    } else {
        alert("Login Unsuccess!!!");
    }
}
// Attach the handlers after DOM loads
document.addEventListener("DOMContentLoaded", function () {
    const regForm = document.getElementById("regform");
    if (regForm) {
        regForm.addEventListener("submit", store);
    }

    const loginForm = document.getElementById("loginform");
    if (loginForm) {
        loginForm.addEventListener("submit", validate);
    }
});
