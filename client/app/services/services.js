angular.module('commutify.services', [])

.factory('Ride', function($scope, $http) {
    var getRide = function(ride) {
    	return $http({
    	  method: 'GET',
    	  url: //TODO: URL FOR USER.RIDE[ride]
    	});
    };
  
	var getAll = function() {
  	return $http({
  		method: 'GET',
  		url: //TODO: URL FOR USER.RIDE
  	});
	};

	var saveRide = function(ride) {
		return $http({
			method: 'POST',
			url: //TODO: URL FOR POSTING TO USER.RIDE,
			data: ride
		});
	};

	var deleteRide = function(ride) {
		return $http({
			method: 'DELETE',
			url: //TODO: URL FOR DELETE USER.RIDE[ride]
		})l
	};

	return {
		getRide: getRide,
		getAll: getAll,
		saveRide: saveRide, 
		deleteRide: deleteRide
	};
})
.factory('Auth', function($http, $location, $window) {
	var signin = function(user) {
		return $http({
			method: 'POST',
			url: //TODO: URL FOR POSTING USER AUTH,
			data: user
		});
	};

	var signup = function(user) {
		return $http({
			method: 'POST',
			url: //TODO: URL FOR POSTING NEW USER,
			data: user
		});
	};

	var signout = function() {
		$window.localStorage.removeItem('com.commutify');
		$location('/signin');
	};

	var isAuth= function() {
		return $http({
			method: 'GET',
			url: //TODO: URL FOR VERIFYING USER AUTH
		});
	};

	return {
		signin: signin, 
		signup: signup, 
		signout: signout,
		deleteRide: deleteRide
	};
});
