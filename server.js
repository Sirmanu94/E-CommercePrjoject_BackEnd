/*
https://it.wikipedia.org/wiki/Bcrypt
https://it.wikipedia.org/wiki/Crittografia
*/

import express from "express"
import { createConnection } from 'mysql'
import cors from "cors";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()


const server = express()
server.use(cors())


//TODO: COLLEGARE DATA BASE (UTILIZZARE MYSQL)
var connection = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect();


//TODO: LOGIN DEVE RITORNARE TOKEN (LIBRERIA)

//TODO: PASSWORD DELL'UTENTE DEVE ESSERE DECRIPTATA


server.get('/data', (req, res) => {
  const users = req.body
  const data = {
    name: "Lucy",
    country: "Honduras",
  }
  res.status(200).json(users)
});

server.use(express.json());

//TODO: POST REGISTRAZIONE E POST LOGIN
//post login
server.post('/login', (req, res) => {
  res.status(200).json()
})

//post registrazione
server.post('/registrazione', async (req, res) => {
  const dataUser = req.body
  const hashPassword = await bcrypt.hash(dataUser.password, 10)
  var user = { name: dataUser.name, surname: dataUser.last_name, mail: dataUser.email, password: hashPassword, role_id: 2 };

  var query = connection.query('INSERT INTO users SET ?', user, (error, results, fields) => {
    if (error) {
      console.log(error);
      res.status(500).json({ msg: 'database error' })
      return
    }

    res.status(200).json({
      user: user,
      token: '123',
      msg: "Registrazione avvenuta con successo!"
    })
  });

})

//porta del server
server.listen(3000, () => {
  console.log(`Server running on port 3000`)
});

