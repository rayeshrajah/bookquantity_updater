const axios = require('axios');
const stockChecker = require('../helper_function/stockChecker');

afterEach(() => {
  stockChecker(2);
})
    //Gets all the books;
    test('fetches all books', async () => {
       const result = await axios.get('http://localhost:3000/api/book/');
       console.log('result', result.data);
    });
    //Creates a book and gives back the book that was created;
    test('should create a book', async () => {
        const result = await axios.post('http://localhost:3000/api/book/', {
            id: 4,
            book_name: "test_one",
            author: "unknown",
            stock_level: 1,
            bookstore_id: 1,
        })
        console.log('result', result.data);
    });
    //Deletes a book and gives back a success message;
    
    test('Should set the book stock to 0', async () => {
        const result = await axios.patch('http://localhost:3000/api/book/2', {
            stock_level: 0
        });
        console.log('result', result.data);
    });
    
    test('should update a book stock', async() => {
        const result = await axios.patch('http://localhost:3000/api/book/2', {
            stock_level: 2
        });
        console.log('result', result.data);
    });
    
    test('should delete a book by id', async() => {
        const result = await axios.delete('http://localhost:3000/api/book/4');
        console.log('result', result.data);
    });