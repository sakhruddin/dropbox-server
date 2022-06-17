const mongoose = require("mongoose");

const commitsSchema = mongoose.Schema({
    commentatorName: String,
    Text: String,
    _newsId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'News' 
    }
});

const Commits = mongoose.model('Commits', commitsSchema);
module.exports = Commits;