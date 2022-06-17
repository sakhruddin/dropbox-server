// - добавление комментария к определенной новости
// - удалени комментария
// - вывод всех комментариев определенной новости

const Commits = require('../modeles/Commits.modele.js')

module.exports.commitsController = {

createCommit: (req, res) => {

    Commits.create({
    commentatorName: 'Sah',
    Text: 'Привет' ,
    _newsId: req.params.id
}).then((data) => {
    res.json(data)
})
},

deleteCommits: (req, res) => {
    Commits.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json(" комментарий удален")
        })
},

getCommitsAll: (req, res) => {
    Commits.find({ _newsId: req.params.id })
    .then((data) => {
        res.json(data);
    })
}



}