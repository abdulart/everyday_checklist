const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;