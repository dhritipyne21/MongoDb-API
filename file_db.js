const _yargs = require('yargs')
const cmd = require('yargs').argv
const fs= require('fs')
const process = require('process')
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
    //const books=[]
    fs.readFile('data.json',(err,data)=>{
        const books =JSON.parse(data.toString())
        books.push({title: cmd.title, category: cmd.category})

        const jsonStr= JSON.stringify(books)
        fs.writeFile('data.json',jsonStr,(error)=>{
    
        if(!error)
        {
            console.log('Success');
        }})
    })
    // console.log('Added')
    // console.log(cmd.title)
    // console.log(cmd.category)

    //command===========> node index.js add --title Trading --category Investment
}
else if(cmd._[0] === 'delete')
{
    fs.readFile('data.json',(err,data)=>{
        const books =JSON.parse(data.toString())
        const filtered = books.filter((b)=>b.title !== cmd.title)
       
        console.log(filtered)
        const jsonStr= JSON.stringify(filtered)
        fs.writeFile('data.json',jsonStr,(error)=>{
    
        if(!error)
        {
            console.log('Success');
        }})
    })
}
else
{
    console.log('Invalid command')
}