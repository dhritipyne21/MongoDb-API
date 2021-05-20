const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url,{useUnifiedTopology:true});
// Use connect method to connect to the server
client.connect(function(err) {
  if(err){
      console.log(err);
  }
  else{
    console.log('Connected successfully to server');

    
    //client.close();
  }
  
});
 module.exports=client;