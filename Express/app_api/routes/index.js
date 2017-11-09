var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

router.get('/profile', auth, ctrlProfile.profileRead);
mongoose.connect('mongodb://localhost:27017/meanapp');
