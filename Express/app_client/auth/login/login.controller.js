module.exports.login = function(req, res) {
  passport.authentication('local', function(err, user, info)
{
  var token;
  //if passport throws/catches am error
  if (err) {
    res.status(404).json(err);
    return;
  }
  //If a user is found
  if (user){
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token": token
    });
  } else {
    //if user is not found
    res.status(401).json(info);
  }
}) (req, res);
};

function loginCtrl($location, authentication) {
  var vm=this;

  vm.credentials = {
    email : "",
    password : ""
  };

  vm.onSubmit = function () {
    authentication
     .login(vm.credentials)
     .error(function(err) {
       alert(err);
     })
     .then(function() {
       $location.path('profile');
     });
  };
}
