const mocha = require('mocha');
const assert = require ('assert');
const  eventschema = require ('../controllers/view/event_schema')


describe ('saving records', function (){

it('saves an event', function(done){

  var event = new eventSchema({

    location: 'austin'

  });
  event.save().then(function(){
    assert(char.isnew === false);
    done(;)
  });
});
});
