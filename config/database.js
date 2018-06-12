const mongoose = require('mongoose');
const config = require('./config');

module.exports = {
    connect: function(){
        if(!this.connection) return mongoose.connect(config.DB)
            .then(con => this.connection = con)
            .catch(err => console.log(err));
        return this.connection;
    },
    connection: false
}