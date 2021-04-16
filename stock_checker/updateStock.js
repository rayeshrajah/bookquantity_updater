const axios = require('axios');

function updateStockLevel(id, num){
    axios({
        method: 'patch',
        url: 'http://localhost:3000/api/book/' + id,
        data: {
            stock_level: num
        }
    }).then((res) => {
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    })
}

updateStockLevel(2, 0);