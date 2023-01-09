//skapa ett meddelande för antingen success eller error vid inmatning
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form-message");

    messageElement.textContent = message;
    messageElement.classList.remove("form-success-message", "form-error-message");
    messageElement.classList.add(`form-${type}-message`);

}


// skapar ett meddelande vid felinmatning
function setInputError(inputElement, message) {
    inputElement.classList.add("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = message;
}


// tar bort felmeddelandet när användaren fortätter skriva
function clearInputError(inputElement) {
    inputElement.classList.remove("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = "";
}


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");


    //loginForm function för submit som jämför username + password med users.json API
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();


        var sqlite3 = require('sqlite3').verbose();
        var file = "hr";
        var db = new sqlite3.Database(file);
        var username = document.querySelector("#username").value;
        var password = document.querySelector("#password").value;

        const accountExists = users.find(obj => (obj.username === username && obj.password === password))


        if (accountExists === undefined) {
        db.all("SELECT first_name,last_name FROM employees", function(err, rows) {
                rows.forEach(function (row) {
                    console.log(row.first_name, row.last_name);
                })
            });	
        db.close();
        };
    });



    // när vi klickar på länken linkLogin så removar loginForm, form-hidden och createAccountForm addar form-hidden
    document.querySelector("#linkLogin").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    })

    // när vi klickar på länken createAccount så addar loginForm, form-hidden och createAccountForm removar form-hidden
    document.querySelector("#linkCreateAccount").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    })

    // när användaren börjar skriva men klickar "bort" från rutan vid användarnamn så kommer detta felmeddelande fram
    // kopplat till id "signupUsername"
    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", (e) => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 5) {
                setInputError(inputElement, "Användarnamn måste vara minst 5 tecken långt");
            }
        });

        //input av functionen där felmeddelandet ska tar bort om vi fortsätter skriva
        inputElement.addEventListener("input", (e) => {
            clearInputError(inputElement);
        })
    });
});