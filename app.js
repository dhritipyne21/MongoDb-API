
    const client = require('./db')

    const db = client.db('itcdb');
    const books = db.collection('books');
    books.insertOne({title:'Poor Dad'}).then((data)=>{
        console.log(data);
    });

    //client.close();
  
  