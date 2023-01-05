const express = require('express')
const app = express()
var orders = require('./orders.json'); // json file path

/* console.log(orders); */


app.get("/orders", function(req, res, next) {
  res.send(orders);
});



app.post('/register', (req, res) => {
  const pass = utils.hashPassword("123")
  const correct = utils.comparePassword("123", "$2b$08$hx3YTfswKozSR9nm0oKHKevIo3ftrPt2ca5dE2on0lOg2jk5s3i7K")
  res.send({pass, correct})
})


/* function getId(){
    const lastUser = users.slice(-1)[0]

    let id = (lastUser?.id);
    id = id ? id + 1 : 1;
    return id;
} */


//hämta alla användare
/* app.get('/users', (req, res) => {
    res.send(users)
}) */


//hämta en användare
/* app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    res.send(user)
}) */

//posta ny användare
/* app.post('/users', (req, res) => {
    const id = getId(users)

    const newUser = {
        id,
        userName: req.body.userName,
        password: req.body.password
    }

    users.push(newUser)
    res.send({id})
}) */


//uppdatera användare
/* app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = users.findIndex(u => u.id === id)

    users[index].userName = req.body.userName
    users[index].password = req.body.password


    res.sendStatus(200)
}) */

//ta bort anvöndare
/* app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = users.findIndex(u => u.id === id)
    users.splice(index, 1)

    res.sendStatus(200)
}) */





app.listen(5000, () => {
    console.log("http://localhost:5000")
})