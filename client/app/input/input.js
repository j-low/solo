angular.module('commutify.input', [])

.controller('InputController', function($scope, $http, Input) {
	$scope.ride = {};
  
  $scope.newRide = function(ride) {
  	Input.post(ride)
  	.then(function() {
  		//TODO: DEFINE BEHAVIOR TO NOTIFY VIEW OF SUCCESSFUL POST
  	})
  	.catch(function(error) {
  		//TODO: DEFINE BEHAVIOR TO NOTIFY VIEW OF POST ERROR
  	});
  };
});