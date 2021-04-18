const axios = require('axios');

function stockChecker(id) {
    axios({
        method: 'get',
        url: 'http://localhost:3000/api/book/' + id,
    }).then((res) => {
         if(res.data[0].stock_level === 0){
            console.log("Out of stock");
         }
         else if(res.data[0].stock_level > 0){
            console.log("Book is available")
         }
    }).catch((err) => {
        console.log(err);
    })

    setTimeout(() => {
        stockChecker(2);
    }, 5000);
}

stockChecker(2);

module.exports = stockChecker;