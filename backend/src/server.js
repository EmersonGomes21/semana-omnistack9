const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();
mongoose.connect('mongodb+srv://"usuario":"senha"@cluster0.7acjy.mongodb.net/"nomeDoBanco"?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
//GET, POST, PUT, DELETE
//req.query = Acessar query params ,para filtros
//req.params =Acessar route params para edição, delete
// req.body = acessar corpo da requisição, create, put de registro
//express não interpreta por padrão requisições no formato json, por isso é nécessário este comando
app.use(cors()); 
app.use(express.json()); 
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads')));
app.use(routes);

app.listen(3333);