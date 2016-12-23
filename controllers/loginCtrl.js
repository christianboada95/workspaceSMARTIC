app.controller("loginController", function($scope, $http, $location){ //, $location, $http
   
   $scope.login = function(){

        var username = $scope.username;
        var password = $scope.password;
       
        $http({
          method: 'POST',
          url: 'http://localhost/smartic/public/login',
          data: {
              "identifier": username,             //1082940074,
              "password": password               //123
          }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response isßß available
            console.log("good");
            console.log(response);
            //busca el token en la respuesta del servidor
            var token = response.data.response.token;
            //almacena el token en localStorage
            localStorage.setItem("token", token)
            $location.path('/dashboard'); 
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log("bad");
          });
   }
   //Resquet a list of users
   $scope.getUsers = function() {
       
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
   }
   
   $scope.logout = function() {
       
       $http({
          method: 'GET',
          url: 'http://localhost/smartic/public/logout',
          headers: {
              'Content-Type': undefined,
              'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }).then(function successCallback(response) {
          
            console.log("good");
            console.log(response);
            
          }, function errorCallback(response) {
         
            console.log("bad");
            console.log(response);
          });
   }
   
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
   
});