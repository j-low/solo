angular.module('commutify.auth', [])

.controller('Auth', function($scope, $http, Auth) {
  $scope.user = {};

  $scope.signin = function() {
  	Auth.signin($scope.user)
  	.then(function(token) {
      $window.localStorage.setItem('com.commutify', token);
      $location('/index');
  	})
  	.catch(function(error) {
      //TODO: INDICATE ERROR SOMEWHERE IN SIGNIN VIEW
  	});
  };

  $scope.signup = function() {
  	Auth.signup($scope.user)
  	.then(function(token) {
  		$window.localStorage.setItem('com.commutify', token);
  		$location('/index');
  	})
  	.catch(function(error) {
  		//TODO: INDICATE ERROR SOMEWHERE IN SIGNUP VIEW
  	});
  }; 
});
