var dataAccess = require('./dataAccess');

// var a = new Moment();
// console.log(a.format('h:mm:ss a')); //logs the current time
// console.log('my application just ran');

function logResponse(resp){
  console.log(resp, new Moment().format("h:mm:ss a"));
}

// myModule.sayHi("assaf");
// setInterval(function(){
//   Request('http://jsonplaceholder.typicode.com/posts/1')
//     .then(logResponse)
// },3000)

setInterval(function(){
  dataAccess.getPost('1');
}, 1000)

