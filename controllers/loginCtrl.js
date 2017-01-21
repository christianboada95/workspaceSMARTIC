app.controller("LoginController", function($scope, $http, $location, $cookies, loginService){ //, $location, $http
    
   $scope.login = function(user, pass){
       
        $http({
          method: 'POST',
          url: 'http://138.197.43.95/login',
          data: {
              "identifier": user,             //1082940074,
              "password": pass               //123
          }
        }).then(function successCallback(response) {
            console.log(response);
            //busca el token en la respuesta del servidor
            var token = response.data.response.token;
            //almacena el token en localStorage
            //$cookie.put("logged-in", username);
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("user", JSON.stringify(response.data.response.user) )
            $location.path('/dashboard'); 
        }, function errorCallback(response) {
            $location.path('/login');
            console.log("bad");
            alert("error");
        });
   }
   /*
   $scope.login = function(user, pass) {
    var authData = {};
    authData.identifier = user;
    authData.password  = pass;
     console.log(authData);
    loginService.login(authData, function(data) {
      window.localStorage.setItem("token", data.response.token);
      window.localStorage.setItem("user", JSON.stringify(data.response.user));
      //$location.url('/dashboard');
    });
     
  }*/
   
   
});   

app.controller("LogoutController", function($scope, $http, $location, $rootScope){
    
    $scope.logout = function() {
       
       $http({
          method: 'GET',
          url: 'http://138.197.43.95/logout',
          headers: {
              'Authorization': 'Bearer ' + window.localStorage.getItem('token')
          }
        }).then(function successCallback(response) {
          
            console.log("good");
            console.log(response);
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("user");
            //$rootScope.authUser = '';
            $location.path('/login');
          }, function errorCallback(response) {
         
            console.log("bad");
            alert("algo salió mal");
          });
   }
});

app.controller("SignUpController", function($scope, $http, $location){
   
    
});

   //Resquet a list of users
   /*$scope.getUsers = function() {
       
       $http({
          method: 'GET',
          url: 'http://localhost/smartic/public/users',
          headers: {
              'Content-Type': undefined,
              'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response isßß available
            console.log("good");
            console.log(response);
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log("bad");
          });
   }*/
   
   
   //$scope.singup
   
   /*
   $scope.signin = function() {
            var formData = {
                email: $scope.email,
                password: $scope.password
            }
 
            Main.signin(formData, function(res) {
                if (res.type == false) {
                    alert(res.data)    
                } else {
                    $localStorage.token = res.data.token;
                    window.location = "/";    
                }
            }, function() {
                $rootScope.error = 'Failed to signin';
            })
        };
 
        $scope.signup = function() {
            var formData = {
                email: $scope.email,
                password: $scope.password
            }
 
            Main.save(formData, function(res) {
                if (res.type == false) {
                    alert(res.data)
                } else {
                    $localStorage.token = res.data.token;
                    window.location = "/"   
                }
            }, function() {
                $rootScope.error = 'Failed to signup';
            })
        };
 
        $scope.me = function() {
            Main.me(function(res) {
                $scope.myDetails = res;
            }, function() {
                $rootScope.error = 'Failed to fetch details';
            })
        };
 
        $scope.logout = function() {
            Main.logout(function() {
                window.location = "/"
            }, function() {
                alert("Failed to logout!");
            });
        };
        $scope.token = $localStorage.token;
   
   
   $scope.formData = {};

    // Cuando se cargue la página, pide del API todos los TODOs
    $http.get('http://localhost/smartic/public/login')
        .success(function(data) {
            $scope.todos = data;
            console.log(data)
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Cuando se añade un nuevo TODO, manda el texto a la API
    $scope.createTodo = function(){
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };

    // Borra un TODO despues de checkearlo como acabado
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };*/
   
