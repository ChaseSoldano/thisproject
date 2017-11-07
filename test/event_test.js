const assert = require ('assert');
const  eventSchema = require ('../controllers/chaseschema.js');


describe ('saving records', function (){
      this.timeout(10000);
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
