var security = require('./security');
var md5 = require('md5');
var mongoose = require('../modules/mongoose');
admins = require('../models/admins');
var users=admins.users; 

var superJson={};
    superJson.userName="admin";
    superJson.password="admin";
    superJson.password=security.encrypt(md5(superJson.password));
    superJson.type="SUPER";
 
  var query={"userName":superJson.userName,"type":superJson.type};
  var options={"upsert":true,"multi":false};
  users.update(query,superJson,options ,function (err, data) {
     if (err)  console.log(err);
        process.exit();
});
/*
docker run -it --volumes-from=data  --link mongo:mongo -e APPPATH="jaynode" --rm jianyeruan/node /run.sh node modules/createSuper.js
*/