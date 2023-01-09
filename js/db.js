
 https://stackoverflow.com/questions/67822346/how-can-i-extract-data-from-sqlite-in-a-server-page-and-use-the-data-in-a-diffe
 var express = require('express');
  var app = express();
  var fs = require('fs');
  const sqlite3 = require('sqlite3');
  const sqlite = require('sqlite');
  app.use(express.static('public'))
  
  
  async function getDBConnection(){
      const db = await sqlite.open({
          filename: "users.db",
          driver: sqlite3.Database
      });
      return db;
  }
  
  app.get('/login.html', async function(req, res){
      let db = await getDBConnection();
      let users = await db.all("SELECT * from users");
      await db.close();
      return res.json(users)
  })
  
  var port = 5502;
  app.listen(port, function(){
      console.log('server on! http://localhost:' + port);
  });















/* https://www.youtube.com/watch?v=ZRYn6tgnEgM
const sqlite3 = require('sqlite3').verbose();
let sql;

//connect to db
const db = new sqlite3.Database('../users.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
})

//create tavle
sql = `CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, username, password)`;
db.run(sql);

//drop table
db.run("DROP TABLE users")

//insert user into db users
sql = `INSERT INTO users(username, password)
        VALUES (?, ?)`;
db.run(
    sql,
    ["joni", "123"],
    (err) => {
        if (err) return console.error(err.message)
    });


//update data
sql = `UPDATE users SET username = ? WHERE id = ?`;
db.run(sql, ['joni', 1], (err) => {
    if (err) return console.error(err.message)
});

//delete data
sql = `DELETE FROM users WHERE id = ?`;
db.run(sql, [1], (err) => {
    if (err) return console.error(err.message)
});


//query the data
sql = 'SELECT * FROM users';
db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach(row => {
        console.log(row)
    })
}); */










/* ---------   KOD FÖR ATT SKAPA NYA RADER FÖR USERS HÄMTAT FRÅN ETT API   ------------

 axios
    .get("http://random-data-api.com/api/users/random_user")
    .then((response) => {
        const { data } = response;
        const { username} = data;
        const { password } = data;
        const { id } = data;


      const sql = `INSERT INTO users(username, password, id)
                    VALUES (?, ?, ?)`;

    db.run(sql, [username, password, id], (err) => {
        if(err) return console.error(err.message);
        console.log("a new row has been created")
    })


    db.close((err) => {
        if (err) return console.error(err.message);
    })


    }).catch((error) => {
        if (error) return console.error(error);
    });


 */


/*
    ---------   FÖR ATT SKAPA ETT NYTT TABLE    ------------

db.run(
        `CREATE TABLE users(username, password, id)`
        ); */

/*
    ---------   FÖR ATT LÄGGA IN NY CONTENT I USERS   ------------

const sql = `INSERT INTO users(username, password, id)
                    VALUES (?, ?, ?)`;

    db.run(sql, [`jonna`, `123`, 1], (err) => {
        if(err) return console.error(err.message);
        console.log("a new row has been created")
    })  */


/* app.get("/orders", function(req, res, next) {
  res.send(orders);
});



app.post('/register', (req, res) => {
  const pass = utils.hashPassword("123")
  const correct = utils.comparePassword("123", "$2b$08$hx3YTfswKozSR9nm0oKHKevIo3ftrPt2ca5dE2on0lOg2jk5s3i7K")
  res.send({pass, correct})
}) */


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
