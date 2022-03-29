module.exports=function(app){
     //rota para a página de inicial
    app.get('/',function(req,res){
        res.render('home/index.ejs');
    });
    
};