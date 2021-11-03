const express = require('express')
const app = express()
const port = 3000;
app.use(express.json());
var cors = require("cors");
app.use(cors())
const api = require('./Connection/api')
const user = require('./Controller/user')
app.use('/',user)
app.get('/', (req, res) => res.send('Hello World!!'))
app.listen(port, () => console.log(`Example app listening on port port!`))