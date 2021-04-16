const express = require('express');
const router = express.Router();
const bookRouter = require('./book');
const bookstoreRouter = require('./bookstore');

router.use('/bookstore', bookstoreRouter);
router.use('/book', bookRouter);


module.exports = router;