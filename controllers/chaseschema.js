const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema ({

    location:"string",
    date:"string",
    name:"string",


});
const eventsSchema = mongoose.model('chaseschema', eventSchema);

module.exports = eventsSchema;
