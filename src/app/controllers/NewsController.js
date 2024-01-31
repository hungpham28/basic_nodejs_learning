const Course = require('../models/Course')

class NewsController {
  //[GET] /news
  async index(req, res) {
    const data = await Course.find()
    res.json(data)
    // res.render('news');
  }
  //[GET] /single-blog
  showBlog(req, res) {
    res.send('DETAIL COMPANY!!!')
  }
}
module.exports = new NewsController()
