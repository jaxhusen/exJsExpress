// försöka läsa av api i login
var users = [
    {
        username: "jonna",
        password: "123"
    },
    {
        username: "paxl",
        password: "123"
    }
]


//test
/* function getInfo(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for (i = 0; i < users.length; i++){
        if (username == users[i].username && password == users[i].password){
            console.log(username + "is logged in")
            return 
        }
    }
        console.log("Fel användarnamn eller lösenord")
}
 */




/* let cart = JSON.parse(localStorage.getItem("CART")) || [];


// ADD TO CART
function addToCart(id) {
    // check if product already exist in cart
    if (cart.some((item) => item.id === id)) {
      changeNumberOfUnits(id);
    } else {
      const item = productsAll.find((product) => product.id === id);
  
      cart.push({
        ...item,
        numberOfUnits: 1,
      });
    }

    // save cart to local storage
localStorage.setItem("CART", JSON.stringify(cart));
let totalItems = 0;
cart.forEach((item) => {
  totalItems += item.numberOfUnits;
  });
totalItemsInCartEl.innerHTML = totalItems;
} */