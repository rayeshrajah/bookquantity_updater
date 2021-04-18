const express = require('express');
const router = express.Router();
const db = require('../../db/index');

router.get('/', (req, res) => {
    db.select('books.id', 'books.book_name', 'books.author', 'books.stock_level', 'books.created_at', 'books.updated_at', 'bookstores.bookstore_name')
       .from('bookstores')
       .innerJoin('books', 'bookstores.id', 'books.bookstore_id' )
       .orderBy('books.id').then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
});

router.post('/', (req, res) => {
    db.insert(req.body).returning('*').into('books').then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
});

router.patch('/:id', (req, res) => {
    db('books').where({ id: req.params.id })
        .update(req.body)
        .returning('*').then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        });
});
router.put('/:id', (req, res) => {
    db('books').where({ id: req.params.id })
        .update({
            book_name: req.body.book_name,
            author: req.body.author,
            stock_level: req.body.stock_level,
            bookstore_id: req.body.bookstore_id
        })
        .returning('*').then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        });
});

router.delete('/:id', (req, res)=> {
    db('books').where({id: req.params.id}).del().then(function() {
        res.json({success: true});
    }).catch((err) => {
        res.json({error: err})
    })
})
//Get books by id;
router.get('/:id', (req, res) => {
    db.select().from('books').where({id: req.params.id}).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
})

module.exports = router;