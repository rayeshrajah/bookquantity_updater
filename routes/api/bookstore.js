const express = require('express');
const router = express.Router();
const db = require('../../db/index');

router.get('/', (req, res) => {
    db.select().from('bookstores').orderBy('id').then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
});

router.post('/', (req, res) => {
    db.insert(req.body).returning('*').into('bookstores').then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
});

router.patch('/:id', (req, res) => {
    db('bookstores').where({ id: req.params.id })
        .update(req.body)
        .returning('*').then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        });
});
router.put('/:id', (req, res) => {
    db('bookstores').where({ id: req.params.id })
        .update({
            bookstore_name: req.body.book_name,
        })
        .returning('*').then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        });
});

router.delete('/:id', (req, res)=> {
    db('bookstores').where({id: req.params.id}).del().then(function() {
        res.json({success: true});
    }).catch((err) => {
        res.json({error: err})
    })
})

module.exports = router;