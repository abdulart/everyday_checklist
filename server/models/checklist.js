const mongoose = require('mongoose');

const ChecklistSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    checklist: {
        type: Array,
    }
});

const Checklist = mongoose.model('Checklist', ChecklistSchema);

module.exports = Checklist;