var myGreeting = "hi"; //Private!

var myModule = {
    sayHi: function(name){
        console.log(myGreeting + ' ' + name);
    }
}

module.exports = myModule;