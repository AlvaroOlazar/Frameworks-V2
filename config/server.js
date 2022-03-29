const express = require ('express'); //importação do express

const app = express(); //app recebe o express em execução

app.set('view-engine', 'ejs'); // configuração do ejs como motor de telas do projeto

app.set('views', './app/views'); // configuração do novo diretório na pasta views

module.exports=app;