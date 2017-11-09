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
<<<<<<< HEAD
};s
=======
};
>>>>>>> 55af5e4ea3298c483cae828d3115c310b582687d

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
