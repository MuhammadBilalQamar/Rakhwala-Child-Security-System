const express = require('express')
const app = express()
var port = process.env.port || 3000;

app.get('/', (req, res) => res.send('Bismillah Hirrahmanirrahim. This  is root route !'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


