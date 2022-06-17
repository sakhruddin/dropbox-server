const Categories = require('../modeles/Categories.modele.js')

module.exports.categoriesController = {

    postCategories: (req, res) => {
        Categories.create({nameCategories: req.body.nameCategories})
        .then((data) => {
            res.json(data)
        })
    },


    deleteCategories: (req, res) => {
        Categories.findByIdAndRemove(req.params.id)
        .then(() => {
             res.json("Категория удалена")
           })
         },

         getCategories: (req, res) => {
            Categories.find( { } )
            .then((data) => {
                res.json(data)
            })
        },

}