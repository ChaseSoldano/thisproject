const mongoose = require ('mongoos');
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    date: 'number',
    location: 'string',
    time: 'number',



});

const callEvent = mongoose.model('callEvent', eventSchema);

module.exports = callEvent;
