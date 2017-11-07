const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: 'string',
    password: 'string'

});

const callUsers = mongoose.model('callUsers', userSchema);

module.exports = callUsers;
