var pjson = require('./package.json');
var amqp = require('amqplib/callback_api');
var rest = require('sync-rest-client');



function start(){
	console.log("Starting "+pjson.name+"  "+pjson.version);
}

start();