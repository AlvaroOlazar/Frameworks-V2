module.exports=function(app){
    app.get('/noticias', function(req,res){ //rota para a página de notícias
        const dbConnection=require('../../config/dbConnection');
        const connection=dbConnection(); //conexão com dbConnection
        connection.query('select * from noticias', function(error, result){
            if(error){
                console.log(error);
            };
            res.render('noticias/noticias.ejs', {noticias:result}); //renderizar a pagína de notícias
        });


    });
};