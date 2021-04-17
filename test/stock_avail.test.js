const axios = require('axios');

describe('Book available', () => {
    it('should update a book stock', async() => {
        const result = await axios.patch('http://localhost:3000/api/book/2', {
            stock_level: 2
        });
        console.log('result', result.data);
    });
});