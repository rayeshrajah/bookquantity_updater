const axios = require('axios');

describe('get books data', () => {
    
    it('fetches all books', async () => {
       const result = await axios.get('http://localhost:3000/api/book/');
       console.log('result', result.data);
    });

    it('should create a book', async () => {
        const result = await axios.post('http://localhost:3000/api/book/', {
            book_name: "test_one",
            author: "unknown",
            stock_level: 1,
            bookstore_id: 1,
        })
        console.log('result', result.data);
    });

    it('should delete a book by id', async() => {
        const result = await axios.delete('http://localhost:3000/api/book/4');
        console.log('result', result.data);
    })

    it('should update a book stock', async() => {
        const result = await axios.patch('http://localhost:3000/api/book/2', {
            stock_level: 2
        });
        console.log('result', result.data);
    })
})