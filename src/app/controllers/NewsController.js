class NewsController {
    //[GET] /news
    index(req,res){
        res.render('news');
    }
    //[GET] /single-blog
    showBlog(req, res){
        res.send('DETAIL COMPANY!!!')
    }

}
module.exports = new NewsController;
