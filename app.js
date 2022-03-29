const app = require('./config/server.js'); //Importação do módulo
const rotaHome=require('./app/routes/home')(app); // Direciona a rota home
const rotaAdmin=require('./app/routes/admin')(app); // Direciona a rota admin
const rotaNoticias=require('./app/routes/noticias')(app); // Direciona a rota noticias

app.listen('3000',function(){
console.log('Servidor rodando na porta 3000'); // Cria um servidor rodando na porta 3000
});
