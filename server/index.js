const mongoose = require('mongoose');
const moment = require('moment-timezone');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const Day = require('./models/day');
const Checklist = require('./models/checklist');
const Activity = require('./models/activity');

async function buildDayActivities() {
    try {
        const data = await Activity.find({});
        const data_reduced = data.reduce((prev, next) => {
            prev.push(next.name);
            return prev;
        }, []);
        let ActivitiesDetails = Array(data_reduced.length);
        data_reduced.forEach((e, idx) => {
            ActivitiesDetails[idx] = { name: e, done: false };
        });
        return ActivitiesDetails;
    } catch (err) {
        console.log(err);
        return [];
    }
}

async function addDay() {
    try {
        let date = moment.tz('Europe/Moscow').format('YYYY-MM-DD');
        const day = await Checklist.find({day: date});
        if(day.length === 0) {
            return buildDayActivities()
                .then(list => {
                    return Checklist.insertMany({day: date, checklist: list});
                })
                .then(() => 'Day inserted')
                .catch(err => console.log(err));
        } else {
            return 'Day already exists';
        }
    } catch (err) {
        console.log(err);
    }

}

addDay()
    .then(data => console.log(data))
    .catch(err => console.log(err));