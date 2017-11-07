function meanData ($http, authentication) {

  var getPrfile = function() {
    return $http.get('/api/profile', {
      headers: {
        Authorization: 'Bearer ' + authentication.getToken()
      }
    });
  };
  return {
    getPrfile : getPrfile
  };
}
