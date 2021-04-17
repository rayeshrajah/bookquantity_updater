const axios = require('axios');

function updateStockLevel(id) {
    axios({
        method: 'get',
        url: 'http://localhost:3000/api/book/' + id,
    }).then((res) => {
        console.log(res.data);
         if(res.data[0].stock_level === 0){
            console.log("Out of stock");
         }
         else{
             console.log("Book is still available");
         }
    }).catch((err) => {
        console.log(err);
    })

    setTimeout(() => {
        updateStockLevel(id);
    }, 5000);
}

updateStockLevel(2);