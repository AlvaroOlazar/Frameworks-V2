const mysql = require('mysql');
module.exports=function(){
    return mysql.createConnection({
        host: 'localhost', //servidor hospedado localmente
        user: 'root', //usuario root
        password:'ifms', //senha do banco de dados
        database: 'portal_noticias' //portal_noticias é o banco de dados utilizado
    });
} //conexão com o banco de dados mysql