const path = require('path');
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Item = require('./models/Item')
const dotenv = require('dotenv')
var cors = require('cors')


const itemApi = require('./routes/itemApi')


const bodyParser = require('body-parser')
const port = process.env.PORT || 3002;
let items

dotenv.config();
app.use(cors()) 
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
// Define Routes

//
app.use('/', itemApi)

app.use(express.json())









mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},()=>console.log("connected!!")
)






app.listen(port, () => {
    console.log(" listening to port :" + port);
})
