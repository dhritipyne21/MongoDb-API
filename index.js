const _yargs = require('yargs')
const cmd = require('yargs').argv
const fs= require('fs')
const process = require('process')
const books = require('./books')
//fs.writeFileSync('data.txt','Hello there');


// fs.writeFile('data2.txt','Hello async file data',(error)=>{
  
//     if(!error)
//     {
//         console.log('Success');
//     }})
    
// fs.readFile('data2.txt',(err,data)=>{
//     if(!err)
//     {
//         console.log(data.toString())
//     }
// })
    
//console.log(process.argv)
//console.log(_yargs.argv)

console.log(cmd)
if(cmd._[0] === 'add')
{
    var book_id=Math.floor(Math.random()*1000) 
    books.add({book_id:book_id, title: cmd.title, category: cmd.category})
    
}
else if(cmd._[0] === 'delete')
{
    books.remove({book_id:cmd.book_id})
}
else if(cmd._[0] === 'show')
{
   books.list()
}
else
{
    console.log('Invalid command')
}