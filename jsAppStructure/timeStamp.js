var Moment = require('moment');

var timeStamp = {
    getTime: function(){
        return new Moment().format("h:mm:ss a");
    }
}

module.exports = timeStamp;