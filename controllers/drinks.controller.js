const Drinks = require('../modeles/drinks.model.js')

module.exports.drinksController = {


    createDrinks: (req, res) => {
        Drinks.create({
            name: req.body.name,
            price: req.body.price,
            inStock: req.body.inStock,
            inCaffeine: req.body.inCaffeine,
            size: req.body.size,
            description: req.body.description
        })
            .then((data) => {
                res.json(data)
            })
    },


    getAllCaffe: (req, res) => {
        Drinks.find({}, { name: 1, price: 1 })
            .then((data) => {
                res.json(data)
            })
            .catch(err => {
                res.json({
                    error: err.message
                })
            })
    },

    getCaffeId: (req, res) => {
        Drinks.findById(req.params.id)
            .then((data) => {
                res.json(data)
            })
    },

    getCaffeInStock: (req, res) => {
        Drinks.find({ inStock: " yes" })
            .then((data) => {
                res.json(data)
            })
    },



    deleteCaffeId: (req, res) => {
        Drinks.findByIdAndRemove(req.params.id)
            .then((error) => {
                res.json()
            })
    },

    updateCaffeId: (req, res) => {
        Drinks.findByIdAndUpdate(req.params.id,

            {
                name: req.body.name,
                price: req.body.price,
                inStock: req.body.inStock,
                inCaffeine: req.body.inCaffeine,
                size: req.body.size,
                description: req.body.description
            })
            .then((data) => {
                res.json('напиток изменен')

            })
    }


}