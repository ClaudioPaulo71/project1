const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


// Metodos HTTP:
    //GET: Buscar informacao no backend
    //POST: Criar informacao no backend
    //PUT: Alterar informacao no backend
    //DELETE: Deletar informacao no backend

//Tipos de parametros:
    //Query Params: Parametros nomeados enviados na rota apos "?" (Filtros, Paginacao)
    //Route params: Parametros utilizados para identificar recursos
    //Request Body: Corpo da requisicao para criar ou alterar recursos

//SQL: MySQL, SQLite, PostgreSQL, Oracle, MS SQL
//NoSQL: MongoDB, CouchDB, etc...


app.listen(3333);
