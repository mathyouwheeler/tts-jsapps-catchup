var Request = require('request-promise');
var timeStamp = require('./timeStamp');

var dataAccess = {
    getPost: function(req){
    	Request('http://jsonplaceholder.typicode.com/posts/' + req)
    		.then(this.logResponse());
    },
    logResponse: function() {
			console.log(response, timeStamp.getTime());    	
    }
}

module.exports = dataAccess;