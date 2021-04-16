const express = require('express');
const apiRoutes = require('./routes/api');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))


app.use('/api', apiRoutes);


app.listen(3000, () => console.log("Sever listening on port 3000"));