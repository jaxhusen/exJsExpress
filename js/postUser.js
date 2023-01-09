//https://jsonplaceholder.typicode.com/guide/
export function postUser(){

    var username = document.querySelector("#signupUsername").value;
    var password = document.querySelector("#signupPassword").value;


            let newUser = {
                "username": username,
                "password": password
            }
    
    fetch('../users.json', {
        method: 'POST',
        
    })
}