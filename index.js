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
var c=cmd._[0]
switch(c){
    case 'add':
        break;
    case 'show':
        break;
    case 'delete':
        break;
    case 'find':
        break;
    default:
        break;

}

console.log(cmd)
if(cmd._[0] === 'add')
{
    const book_id=Math.floor(Math.random()*1000) 
    const res=books.add({book_id:book_id, title: cmd.title, category: cmd.category})
    
}
else if(cmd._[0] === 'delete')
{
    books.remove({book_id:cmd.book_id})
}
else if(cmd._[0] === 'show')
{
   books.filter({}).then((data)=>{
    data.forEach( item => console.log(item.book_id+" || "+item.title+" || "+item.category))
   })
   console.log("Books Collection:")
 // console.log(result)
   
}
else if(cmd._[0] === 'find')
{
   books.filter({title:cmd.title})
}
else if(cmd._[0] === 'edit')
{
    const book_id=cmd.book_id
    const title=cmd.title
    const category=cmd.category
    books.update({book_id,title,category})
}
else
{
    console.log('Invalid command')
}