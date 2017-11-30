let Event = require('../models/Events');

module.exports.createEvent = (req, res) => {
  let event = new Event(req.body);
  event.save((err,result)=> {
    res.json(result);
  });
}

module.exports.listEvents = (req, res) => {
  Event.find({}, (err, results) => {
    res.json(results);
  });
}

module.exports.detailEvent = (req, res) => {
  Event.findById(req.params.id, (err, result) => {
    if (err) res.status(500).send(err);
      else res.json(result);
  });
}

module.exports.updateEvent = (req, res) => {
  event.findById(req.params.id, (err, result) => {
    if (err) res.send('error has occured');
    else {
      result.name = req.body.name || result.name;
      result.date = req.body.date || result.date;
      result.location = req.body.location || result.location;
      result.description = res.body.description || result.description;

      result.save((err, result) => {
        if (err) {
          res.status(500).send(err);
        }
        res.json(result);
      });
    }
  });
}

// module.exports.deleteEvent = function(req, res) {
//     // Delete a note with the specified noteId in the request
//     Event.remove({_id: req.params.id}, function(err, result) {
//         if(err) {
//             res.status(500).send({message: "Could not delete event with id " + req.params.id});
//         } else {
//             res.send({message: "Event deleted successfully!"})
//         }
//     });
// };
module.exports.deleteEvent = (req, res) => {
  event.findById(req.params.id, (err, event) => {
    event.remove(function(err) {
      if(err) return res.status(500).send(err.message);
      console.log('Succesfully deleted');
      res.send(event);
    });
  });
}
  //   if (err) res.send('error has occured');
  //   else res.json(result);
  // });
