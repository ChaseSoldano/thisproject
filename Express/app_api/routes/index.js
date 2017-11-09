var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

router.get('/profile', auth, ctrlProfile.profileRead);
<<<<<<< HEAD
mongoose.connect('mongodb://localhost:27017/meanapp');
=======
>>>>>>> 55af5e4ea3298c483cae828d3115c310b582687d
