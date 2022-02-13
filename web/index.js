const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const PORT = 5000
const db = require('./models')
const http = require("http")
const https = require("https")


// var privateKey  = fs.readFileSync('/etc/letsencrypt/live/domain/privkey.pem', 'utf8');
// var certificate  = fs.readFileSync('/etc/letsencrypt/live/domain/fullchain.pem', 'utf8');

// var credentials = {key: privateKey, cert: certificate}


app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
	res.send({ message: "yuhu" })
})

db.sequelize.sync()

require('./routes/data_article.route')(app)



// var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

// httpServer.listen(8080)
// httpsServer.listen(8000)

const httpServer = app.listen(PORT, () => {
	console.log("connected port " + PORT)
})

