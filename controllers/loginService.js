app.service('loginService', function($http, $q, BASE_URL, API_URL) {
  var url_login = BASE_URL + 'login';
  var url_logout = BASE_URL + 'logout';
  var url = API_URL + 'getUser';
  var auth = API_URL + 'user/auth';

  this.getAuth = function() {
      return JSON.parse(window.localStorage.getItem("user"));
  }
  this.getToken = function() {
      return window.localStorage.getItem("token");
  }
  this.getU = function() {
      var deferred = $q.defer();
      var headers = {headers: { 'Authorization': 'Bearer ' + this.getToken() }};
      $http.get(auth, headers).success(function(data) { deferred.reject('pailas'); })
                              .error(deferred.resolve('si esta logeado'));

      return deferred.promise;
  }
  this.getUser = function() {
      var deferred = $q.defer();
      var headers = {headers: { 'Authorization': 'Bearer ' + this.getToken() }};
      $http.get(auth, headers).success(function(data) { deferred.resolve(data); })
                              .error(deferred.reject);

      return deferred.promise;
  }

  this.login = function(authData, callback) {
    $http.post(url_login, authData).success(callback);
  }
  this.logout = function(callback) {
    $http.get(url_logout,{
        headers: {
                'Authorization': 'Bearer ' + this.getToken()
              }}).success(callback);
  }
});