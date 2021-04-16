const express = require('express');
const router = require('./router');
const app = express();
app.use(express.json());
app.use(router);

app.listen(8080, () => console.log("Sever listening on port 8080"));