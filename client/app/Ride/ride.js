angular.module('commutify.ride', [])

.controller('RideController', function($scope, $http, $firebase, Ride) {
	$scope.currentRide = {};
  $scope.rides = [];
  
  $scope.newRide = function(ride) {
  	Ride.post(ride)
  	.then(function() {
  		//TODO: DEFINE BEHAVIOR TO NOTIFY VIEW OF SUCCESSFUL POST
  	})
  	.catch(function(error) {
  		//TODO: DEFINE BEHAVIOR TO NOTIFY VIEW OF POST ERROR
  	});
  };
});