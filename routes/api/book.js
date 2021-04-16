const express = require('express');
const router = express.Router();
const db = require('../../db/index');

router.get('/', (req, res) => {
    db.select().from('books').then((data) => {
        res.send(data);
    });
});


module.exports = router;