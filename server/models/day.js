const mongoose = require('mongoose');

const DaySchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
});

const Day = mongoose.model('Day', DaySchema);

module.exports = Day;