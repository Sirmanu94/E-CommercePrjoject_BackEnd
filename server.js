import express from "express"
const server = express()

//TODO: POST REGISTRAZIONE E POST LOGIN
//TODO: LOGIN DEVE RITORNARE TOKEN (LIBRERIA)
//TODO: COLLEGARE DATA BASE (UTILIZZARE MYSQL)
//TODO: PASSWORD DELL'UTENTE DEVE ESSERE DECRIPTATA


server.get('/data', (req, res) => {
  const data = {
    name:   "Lucy",
    country: "Honduras",
  }
  res.status(200).json(data)
});

server.use(express.json());

//post login
server.post('/login', (req, res) => {
  const data = {
    name:   "Lucy",
    country: "Honduras",
  }
  res.status(200).json(data)
})

//post registrazione
server.post('/registrazione', (req, res) => {
  const data = {
    name:   "Lucy",
    country: "Honduras",
  }
  res.status(200).json(data)
})

//porta del server
server.listen(3000, () => {
console.log(`Server running on port`)
});

