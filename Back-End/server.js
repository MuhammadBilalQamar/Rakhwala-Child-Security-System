const express = require('express')
const app = express()
var port = process.env.port || 3000;
const { jsonParser, urlEncodedParser } = require("./config/bodyParser");
const { loginApi, registerApi } = require("./models/Auth/auth");


//APP USE MODULES
app.use("/uploads", express.static("uploads"));
app.use(jsonParser, urlEncodedParser);


//API REQUEST/RESPONSE RELATED WORK
app.get('/', (req, res) => res.send('Bismillah Hirrahmanirrahim. This  is root route !'))
app.use("/auth/login", loginApi);
app.use("/auth/register", registerApi);



//APP LISTNING (ABOUT PORT DESCRIPTION)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


