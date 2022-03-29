module.exports=function(app){
    //rota para a página de inclusão de noticia
    app.get('/formularioinclusaonoticia', (req,res)=>{
        res.render('admin/form_add_noticia.ejs');
    });
};