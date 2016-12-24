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

app.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/login', {
       templateUrl: 'views/user/login.html',
       controller: 'LoginController'
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


app.run(['$rootScope', '$location', '$cookieStore', '$http', function($rootScope, $location, $cookie, $http){
    
    // keep user logged in after page refresh
    $rootScope.globals = $cookie.get('logged-in') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }
    
 /*   $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });*/
    
}]);

/*
.module("myApp", ["satellizer"])
    .config(function($authProvider) {
        // Parametros de configuración
        $authProvider.loginUrl = "http://localhost/smartic/public/login";
        $authProvider.tokenName = "token";
        $authProvider.tokenPrefix = "myApp",
    });*/