const mysql = require("mysql")
const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bearerToken = require("express-bearer-token")
const port = 80
const uri = `http://localhost:${port}`
const secret = "iAuP3uXNyBaGZ9tzHw30N0kMQkzwB91v"

const app = express()
app.use(express.json())
app.use(cors())
app.use(bearerToken())

var con = mysql.createConnection({
    host: "localhost",
    user: "myuser",
    password: "1234",
    database: "blog"
})

con.connect((err) => {
    if (err) throw err
    console.log("Connected to MySQL")
})

// genereaza un token de login
function generateToken(email) {
    let data = {
        email: email
    }
    return jwt.sign(data, secret)
}

// verificam ca utilizatorul este logat (adica are un token valid)
function verifyLogin(req) {
     try {
    jwt.verify(req.token, secret)
    } catch(err) {
        return false
    }
    return true
}

// inregistreaza rutele:

// sign-up
app.post("/user", (req, res) => {
    con.query(
    "INSERT INTO users VALUES(NULL, ?, ?, sha1(?))",
    [req.body.email, req.body.name, req.body.password]
    )
    res.sendStatus(200)
})

//login
app.get("/user/login", (req, res) => {
    let email = req.query.email
    let password = req.query.password

    con.query(
        "SELECT * FROM users WHERE email = ? AND password = sha1(?)",
        [email, password],
        (err, result) => {
            if (result.length > 0) {
                res.body = generateToken(email)
                // console.log(res.body)
                res.sendStatus(200)
            }
            else res.sendStatus(400)
            // console.log(result)
        }
    )
})

// add a new post
app.post("/posts", (req, res) => {
    if (!verifyLogin(req)) {
        // unauthorized
        res.sendStatus(401)
        return
    }
    con.query(
        "INSERT INTO posts VALUES(NULL, ?, ?, NOW())",
        [req.body.title, req.body.content]
    )
    res.sendStatus(200)
})

// get a post
app.get("/posts/{id}", (req, res) => {
    
})

// get all posts
app.get("/posts", (req, res) => {
    
})

// porneste aplicatia server
app.listen(
    port, () => console.log(`Server started on ${uri}`)
)