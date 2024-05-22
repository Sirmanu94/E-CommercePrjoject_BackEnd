import express from "express"
import { createPool, createConnection } from 'mysql'
// var mysql      = require('mysql');

const server = express()
// const pool= createPool({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   database : 'prova'
// })


//TODO: COLLEGARE DATA BASE (UTILIZZARE MYSQL)
var connection = createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'prova'
});

connection.connect();


//TODO: LOGIN DEVE RITORNARE TOKEN (LIBRERIA)

//TODO: PASSWORD DELL'UTENTE DEVE ESSERE DECRIPTATA


server.get('/data', (req, res) => {
  const data = {
    name:   "Lucy",
    country: "Honduras",
  }
  res.status(200).json(data)
});

server.use(express.json());

//TODO: POST REGISTRAZIONE E POST LOGIN
//post login
server.post('/login', (req, res) => {
  res.status(200).json()
})

//post registrazione
server.post('/registrazione', (req, res) => {
  const dataUser= req.body
var user  = { name: dataUser.name, email: dataUser.email, password: dataUser.password };
var query = connection.query('INSERT INTO users SET ?', user, function (error, results, fields) {
  if (error){
    res.status(500).json({msg: "error"})
  }

  res.status(200).json(dataUser)
});

})

//porta del server
server.listen(3000, () => {
console.log(`Server running on port`)
});

