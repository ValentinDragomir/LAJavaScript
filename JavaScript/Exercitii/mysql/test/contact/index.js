const mysql = require("mysql")
const express = require("express")
const bodyParser = require("body-parser")
const port = 80
const uri = `http://localhost:${port}`

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

var con = mysql.createConnection({
    host: "localhost",
    user: "myuser",
    paswword: "1234",
    database: "gregs_list"
})

con.connect((err) => {
    if (err) throw err
    console.log("Connected to MySQL")
})


// inregistreaza rutele
app.post("/contact", (req, res) => {
    console.log(req.body)
    con.query(`INSERT INTO contact
               VALUES(NULL, '${req.body.name}', '${req.body.email}', '${req.body.message}')`),
               (err, result, fields) => {}
    // dam raspuns 200 OK
    res.sendStatus(200)
})

// porneste aplicatia server
app.listen(
    port, () => console.log(`Server started on ${uri}`)
)