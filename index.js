const api = require('./api')
const express = require("express");

const server = express();
server.use(express.json());

server.listen(8000)

server.get('/', (req, res) => {
    return res.send({message: "Tiago"})
})

server.get('/pokemon/id', async (req, res) => {
    const { id } = req.params;
    try {
        const { data } = await api.get(`pokemon/1`);
        return res.send({ 
            name: data.name
        })
    } catch (error) {
        res.send({error: error.message})
    }
})

server.get('/pokemon', async (req, res) => {
    try {
        const { data } = await api.get('pokemon/');
        return res.send({ 
            data
        })
    } catch (error) {
        res.send({error: error.message})
    }
})
