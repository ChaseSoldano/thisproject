const assert = require ('assert');
const  eventSchema = require ('../controllers/view/event_schema');


describe ('saving records', function (){

it('saves an event', function(done){

  var char = new eventSchema({

    location: 'austin'

  });
  char.save().then(function(){
    assert(char.isnew === false);
    done();
  });
});
});
