module.export.register = function(req, res) {
  var user = new User();

  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);

  user.save(function(err) {
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token": token
    });
  });
};s

function registerCtrl($location, authentication) {
  var vm = this;

  vm.credentials = {
    name: "",
    email: "",
    password: ""
  };

  vm.onSubmit = function() {
    authentication
     .register(vm.credentials)
     .error(function(err) {
       alert(err);
     })
     .then(function() {
       $location.path('profile');
     });
  };
