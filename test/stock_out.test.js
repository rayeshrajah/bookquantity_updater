const axios = require('axios');

describe('Book unavailable', () => {

    it('Should set the book stock to 0', async () => {
        const result = await axios.patch('http://localhost:3000/api/book/2', {
            stock_level: 0
        });
        console.log('result', result.data);
    });
});