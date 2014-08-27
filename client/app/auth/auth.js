angular.module('commutify.auth', [])

.controller('AuthController', function($scope, $http, $state, Auth, Database) {
  $scope.user = {};

  $scope.signin = function() {
  	Auth.signin($scope.user)
  	.then(function(token) {
      // $window.localStorage.setItem('com.commutify', token);
      $location('/index');
  	})
  	.catch(function(error) {
      //TODO: INDICATE ERROR SOMEWHERE IN SIGNIN VIEW
  	});
  };

  $scope.signup = function() {
  	Auth.signup($scope.user)
  	.then(function(token) {
  		// $window.localStorage.setItem('com.commutify', token);
  		$location('/index');
  	})
  	.catch(function(error) {
  		//TODO: INDICATE ERROR SOMEWHERE IN SIGNUP VIEW
  	});
  }; 
});
