var app = angular.module("smartic", ['ngRoute', 'ngCookies']);

// app.config(function($routeProvider){
//     $routeProvider
//     .when('/login', {
//         templateUrl: '../views/user/login.html'
//     })
//     .when('/dashboard',{
//        template: '<p>Wellcome</p>'
//     })
//     .otherwise({
//       redirecTo: '/login' 
//     });
// });
app.constant('BASE_URL', 'http://138.197.43.95/')
app.constant('API_URL', 'http://138.197.43.95/')
app.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})

app.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/login', {
       templateUrl: 'views/user/login.html',
       controller: 'LoginController',
       resolve: { authUser: function(authMiddleware) { return authMiddleware.isAuth(); } }
   }).
   
   when('/dashboard', {
       templateUrl: 'views/user/dashboard.html',
       controller: 'LogoutController'
   }).
   when('register', {
       templateUrl: 'views/user/register.html',
       controller: 'SignUpController'
   }).
   
   otherwise({
      redirectTo: '/login'
   });
    
}]);

app.factory('authMiddleware', ['$q', 'loginService', '$location',
function($q, loginService, $location) {
  
  var authMiddleware = {
    OK: 200,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    isAuthenticated: function() {
      return loginService.getUser().then(function(data) {
        return data.user;
      })
      .catch(function(err) {
        console.info(err);
        $location.path('/login');
        return err;
      });
    },
    isAuth: function() {
      console.log(loginService.getAuth());
      if(loginService.getAuth() )
        $location.path('/dashboard');
      else
        $location.path('/login');

      return loginService.getAuth();
  
    },
  };
  
  return authMiddleware;
}]);

app.run(['$rootScope', '$location', 'loginService', 
function($rootScope, $location, loginService) {

  // * GET: logout
  $rootScope.logout = function() {
    loginService.logout(function(data) {
      //console.info(data);
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user");
      $rootScope.authUser = '';
      $location.path('/');
    });
  }
}])

/*app.run(['$rootScope', '$location', '$cookieStore', '$http', function($rootScope, $location, $cookie, $http){
    
    // keep user logged in after page refresh
    $rootScope.globals = $cookie.get('logged-in') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }
    
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });
    
}]);*/

/*
.module("myApp", ["satellizer"])
    .config(function($authProvider) {
        // Parametros de configuración
        $authProvider.loginUrl = "http://localhost/smartic/public/login";
        $authProvider.tokenName = "token";
        $authProvider.tokenPrefix = "myApp",
    });*/