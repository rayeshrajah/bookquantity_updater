const axios = require('axios');

function getAllBooks() {
    axios({
        method: "get",
        url: "http://localhost:3000/api/book"
    }).then((res) => {
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    })
};

function createBooks(id, book_name, author, stock_level, bookstore_id){
    axios({
        method: "post",
        url: "http://localhost:3000/api/book",
        data:  {
            id: id,
            book_name: book_name,
            author: author,
            stock_level: stock_level,
            bookstore_id: bookstore_id,
        }
    }).then((res) => {
        console.log(res.data);
    }).catch((err)=> {
        console.log(err);
    });
}

module.exports = {getAllBooks}