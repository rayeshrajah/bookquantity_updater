const express = require('express');
const apiRoutes = require('./routes/api');


const app = express();
app.use(express.json());

app.use('/api', apiRoutes);


app.listen(3000, () => console.log("Sever listening on port 3000"));