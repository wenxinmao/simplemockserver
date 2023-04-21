const express = require('express');
const generateResponse = function(req, res, response) {
	    res.writeHead(200, { 'Content-Type': 'application/json' });
	    res.write(response);
	    res.end();
};
const serverRouter = express.Router();
serverRouter.get('/log', function(req, res) {    generateResponse(req, res, 'hi');});
const app = express();
app.use(express.static('.'))
app.use('', serverRouter);
app.listen(3003, '127.0.0.1');

