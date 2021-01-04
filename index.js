const express = require('express')
const app = express()
const {connection} = require('./src/database/DbConnection')
const { PORT } = require('./src/config')
const bodyParser = require('body-parser');
const Roleroute = require('./src/routes/roles/Roleroute')
const Coderoute = require('./src/routes/codes/Coderouter')
const Regroute = require('./src/routes/userregistration/usersreg')
app.use(bodyParser.urlencoded({extended: true}))    
app.use(bodyParser.json());


app.use('/role', Roleroute);  // goes to Roleroute.js file

app.use('/code', Coderoute);  // goes to Coderoute.js file

app.use('/users', Regroute);

app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`)
})
