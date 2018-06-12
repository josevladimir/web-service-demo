const request = require('request');

const config = require('../config/config');
const items = require('../extras/products');

var counter = 0;

items.forEach(item => {
    request({
        url: `http://localhost:${config.PORT}/products/`,
        method: 'POST',
        json: item
    },function(err,res,body){
        if(err) return console.log(err);
        if(res.statusCode == 200){
            counter++
            return console.log(counter + "'s elementos agregados correctamente");
        }
        return console.log('ERROR AÑADIENDO ELEMENTOS');
    });
});