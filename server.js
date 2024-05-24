import express from "express"
import { createPool, createConnection } from 'mysql'


const server = express()



//TODO: COLLEGARE DATA BASE (UTILIZZARE MYSQL)
var connection = createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'e-commerce Giovanni'
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
var user  = { name: dataUser.name, surname: dataUser.last_name, mail: dataUser.email, password: dataUser.password, role_id:2 };

var query = connection.query('INSERT INTO users SET ?', user, function (error, results, fields) {
  if (error){
    console.log(error);
     res.status(500).json({msg: 'database error'}) 
     return
  }

  res.status(200).json(dataUser)
});

})

//porta del server
server.listen(3000, () => {
console.log(`Server running on port`)
});

