var app = angular.module("smartic", ['ngRoute']);

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
   
   when('/', {
      templateUrl: 'views/user/login.html',
    }).
   
   when('/dashboard', {
      template: '<p>Wellcome</p>'
   }).
   
   otherwise({
      redirectTo: '/login'
   });
    
}]);


/*
.module("myApp", ["satellizer"])
    .config(function($authProvider) {
        // Parametros de configuración
        $authProvider.loginUrl = "http://localhost/smartic/public/login";
        $authProvider.tokenName = "token";
        $authProvider.tokenPrefix = "myApp",
    });*/