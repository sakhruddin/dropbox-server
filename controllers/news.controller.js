const News = require('../modeles/News.modele.js')

module.exports.newsController = {


    postNews: (req, res) => {
        News.create({
            title: "Заголовок новый",
            text: 'Хороршая новость',
            categoryId: req.params.id
        }).then((data) => {
            res.json(data)
        })
    },



    deleteNews: (req, res) => {
        News.findByIdAndRemove(req.params.id)
            .then(() => {
                res.json(" Новость удалена")
            })
    },


    patchNews: (req, res) => {
        try {
            News.findByIdAndUpdate(req.params.id,  
                {title: req.body.title} )
            res.json(' студент изменен')
        } catch (error) {
            console.log(error);
        }
    },


    getNewsAll: (req, res) => {
        News.find({})
            .then((data) => {
                res.json(data)
            })
    },

    getNewsId: (req, res) => {
        News.findById(req.params.id)
            .then((data) => {
                res.json(data)
            })
    },
     
    getNewsByCategory: (req, res) => {
        News.findById(req.params.id, {categoryId: req.params.id})
        .then((data) => {
            res.json(data)
        })
    }  

}