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
  Event.findById(req.params.id, (err, result) => {
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

module.exports.deleteEvent = (req, res) => {
  Event.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) res.send('error has occured');
    else res.json(result);
  });
}
