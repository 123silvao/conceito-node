import express from 'express'


const app = express ()
app.use(express.json())
 
app.get('/usuarios/', (req, res) => {
    

    res.send("ROTA ACESSADA COM SUCESSO")
})

    app.post('/usuarios', (req, res) =>{
        //users.push(req.body)

        //res.status(201).json({message:"Usuario criado com sucesso"})
        res.send("OLA")
    })

    app.listen(3000)

   // node --watch server.js 