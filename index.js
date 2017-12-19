// variables
var express = require('express');
var morgan = require('morgan');
var port = process.env.PORT || 8080;

// set up express routers, host server on port 8080
express()
	.use(morgan('dev'))
	.use(express.static('public'))
	.listen(port, () => console.log('Sever running at localhost:' + port));