const express = require('express')

const cors = require('cors')

const books= require('./books')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send({ greeting:'Hello' })
})

app.get('/books',(req,res)=>{
    books.list_show({}).then((data)=>{
        res.status(200).send(data)
    })
    //res.send({ greeting:'Hello books' })
})

app.get('/books/:id',(req,res)=>{
    console.log(req.params.id)
    books.filter(req.params.id).then((data)=>{
        res.status(200).send(data)
    })
    //res.send({ greeting:'Hello books' })
})

app.post('/books',(req,res)=>{
    console.log(req.body)
    books.add(req.body).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

app.delete('/books/:id',(req,res)=>{
    console.log(req.params.id)
    books.remove(req.params.id).then((data)=>{
        res.send({status:'success'})
    }).catch((err)=>{
        res.send({status:'failure', msg:err})
    })
})

app.put('/books/:id',(req,res)=>{
    console.log(req.params.id)
    console.log(req.body)
    books.update_s({...req.body,_id:req.params.id}).then((data)=>{
        res.status(200).send(data)
        //res.status(200).send({success: data.result.nModified===1})
    }).catch((err)=>{
        res.send({status:'failure', msg:err})
    })
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})