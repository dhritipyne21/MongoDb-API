// const client = require('./db')

//     const db = client.db('itcdb');
//     const collection = db.collection('books');
//     // books.insertOne({title:'Poor'}).then((data)=>{
//     //     console.log(data);
//     // });

//     const add = async(book)=>{
//         await collection.insertOne(book)
//         client.close()
//     }

//     module.exports={add}

const client = require('./db')

const db = client.db('itcdb')
const collection = db.collection('books')

const add = async (book) => {
    await collection.insertOne(book)
    console.log('Record Inserted')
    client.close()
}

const remove = async (id) => {
    await collection.deleteOne(id, function(err, obj) {
        if (err) {
            console.log(err)
        }
        else{
            console.log("1 document deleted")
        }
        
        client.close()
      });
}


const list = async () => {
   
    await collection.find().toArray(function(err, result) {
        if (err) {
            console.log(err)
        }
        else{
            console.log("Books Collection:")
            console.log(result)
        }
        client.close()
      });
    
}

module.exports = {add,remove,list}