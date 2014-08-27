angular.module('commutify.services', [])

//hey I'm here from a foreign land 

.factory('Database', function($firebase) {
	db = $firebase(new Firebase('https://commutify.firebaseio.com/'));

  return db;
})

.factory('Ride', function($scope, $http, $firebase) {
    var getRide = function(ride) {
    	// return $http({
    	//   method: 'GET',
    	//   url: //TODO: URL FOR USER.RIDE[ride]
    	// });
      // db.
    };
  
	var getAll = function() {
  	// return $http({
  	// 	method: 'GET',
  	// 	url: //TODO: URL FOR USER.RIDE
  	// });
	};

	var saveRide = function(ride) {
    var ref = db.child($user.username);
    ref.child('rides').$add({
		    	date: ride.date,
		    	time: ride.time,
		    	beginLocation: ride.beginLocation,
		    	endLocation: ride.endLocation  
        });
	};

	var deleteRide = function(ride) {
    var ref = db.child(ride.user + '/' + ride.id);
    ref.remove();
	};

	return {
		getRide: getRide,
		getAll: getAll,
		saveRide: saveRide, 
		deleteRide: deleteRide
	};
})

.factory('Auth', function($http, $location, $window, $firebase) {
	var signin = function(user) {
		// return $http({
		// 	method: 'POST',
		// 	url: //TODO: URL FOR POSTING USER AUTH,
		// 	data: user
		// });
	};

	var signup = function(user) {
		// return $http({
		// 	method: 'POST',
		// 	url: //TODO: URL FOR POSTING NEW USER,
		// 	data: user
		// });
    db.push({});
	};

	var signout = function() {
		$window.localStorage.removeItem('com.commutify');
		$location('/signin');
	};

	var isAuth= function() {
		// return $http({
		// 	method: 'GET',
		// 	url: //TODO: URL FOR VERIFYING USER AUTH
		// });
	};

	return {
		signin: signin, 
		signup: signup, 
		signout: signout,
	};
});
