const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.use(express.json());
app.use(require("./routes/news.route"));
app.use(require("./routes/categories.route"));
app.use(require("./routes/commits.route"));



mongoose.connect("mongodb+srv://sakhruddin:faros095@cluster0.z8yq6.mongodb.net/news-site?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(4000, () => {
    console.log('Сервер запущен успешно')
});