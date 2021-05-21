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

//const { reject } = require('lodash')
//const { resolve } = require('path')
const {ObjectId} = require('mongodb')
const { title } = require('process')
const client = require('./db')


const db = client.db('itcdb')
const collection = db.collection('books')

const add =  (book) => {
    // await collection.insertOne(book)
    // console.log('Record Inserted')
    // client.close()

    return new Promise(async(resolve,reject)=>{
        try{
            const res=await collection.insertOne(book)
            if(res.result.ok == 1){
                resolve({status:'success'})
            }
        }
        catch(error){
            reject({status:'failure',reason:error})
        }
        })
    
}

const removei = async (book_id) => {
    await collection.deleteOne(book_id, function(err, obj) {
        if (err) {
            console.log(err)
        }
        else{
            console.log("1 document deleted")
        }
        
        client.close()
      });
    
}

const removepp=async (id) =>{
    try{
        const result=await collection.deleteOne(id)
        if(result.result.ok)
        {
            console.log("1 item deleted")
        }
    }catch (error) {
        console.log('Unable to delete',error)
    }
    finally
    {
        client.close()
    }
}

const remove=(id)=>{
    return collection.deleteOne({_id: ObjectId(id)})
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

const filter1 = async (title) => {
   
    await collection.find(title).toArray(function(err, result) {
        if (err) {
            console.log(err)
        }
        else{
            console.log("Books Collection:")
            result.forEach( item => console.log(item.book_id+" || "+item.title+" || "+item.category))
          //  console.log(result)
        }
        client.close()
      });
    
    //   let result=await collection.find(title).toArray()
      
    //   client.close()
    //   return result
}

const filter = (id) => {
   // return collection.find(title).toArray()
    return new Promise(async(resolve,reject)=>{
        try{
            const data = await collection.find({_id: ObjectId(id)}).toArray()
            resolve(data)
            
        }
        catch(error){
            reject({status:'failure',reason:error})
        }
        })
}

const list_show = () => {
    // return collection.find(title).toArray()
     return new Promise(async(resolve,reject)=>{
         try{
             const data = await collection.find().toArray()
             resolve(data)
             
         }
         catch(error){
             reject({status:'failure',reason:error})
         }
         })
 }

const update = async (book) => {
    try{
        await collection.updateOne({book_id: {$eq: book.id}},
            {$set : {
                title: book.title,
                category: book.category
            }})
    }catch(error){
        console.log('unable to update '+error)
    }finally{
        client.close()
    }
    
    
  
}

const update_s=(book)=>{
    console.log(book)
    return collection.updateOne({_id : ObjectId(book._id)},
        {$set : {
            title: book.title,
            category: book.category
        }})
}

module.exports = {add,remove,list,filter,update,update_s,list_show}