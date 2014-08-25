angular.module('commutify.services', [])

.factory('Auth', function($http, $location, $window) {
	var signin = function(user) {};

	var signup = function(user) {};

	var signout = function() {};

	var isAuth= function() {};
})
.factory('Input', function($scope, $http) {
    var get = function(ride) {};
  
	var getAll = function() {};

	var post = function(ride) {};

	var delete = function(ride) {};
})