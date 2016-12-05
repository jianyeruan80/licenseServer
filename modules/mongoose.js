var mongoose = require('mongoose');

var log = require('./logs');
var dbIpAddress = process.env.MONGO_PORT_27017_TCP_ADDR || 'mongo';
var dbPort =  '27019';
 mongoose.connect('mongodb://' + dbIpAddress + ':' + dbPort + '/licensesDb', function(err) {
    if(err) {
        log.info('connection error', err);
    } else {
        log.info('DB connection successful');
    }
});
module.exports=mongoose;
