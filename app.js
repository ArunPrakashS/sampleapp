var express = require('express');

var exp = express();

exp.get('/',function(req,res) {
    res.write(" Hello Nodejs Webapp ");
    res.end();
});

exp.get('/data',(req,res) => {
    res.send("Hi. You called Data");
});

var port = process.env.npm_package_config_port;
exp.listen(port, function(){
    console.log("Listening on Port " +port);
});