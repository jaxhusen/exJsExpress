//  KOD FÖR INLOGGNIG OCH SKAPA NYTT KONTO
var db = openDatabase('users', '1.0', 'users database', 2 * 1024 * 1024);

//https://www.youtube.com/watch?v=3GsKEtBcGTk

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

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        //fetcha login här


        getUsers();
        async function getUsers() {
            const response = await fetch('../users.json');
            const data = await response.text();
            console.log(data);

        }

        setFormMessage(loginForm, "error", "invalid username/password")
    });

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

