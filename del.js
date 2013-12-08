It's user.id in a callback ni5 auth.id.

var chatRef = new Firebase('https://SampleChat.firebaseIO-demo.com');

 var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {

 if (error) 
 { 
 // an error occurred while attempting login 
 console.log(error); 
 } 
 
 else if (user) 
 { // user authenticated with Firebase 
 console.log('User ID: ' + user.id + ', Provider: ' + user.provider); 
 }
 
 else { 
 // user is logged out 
 }