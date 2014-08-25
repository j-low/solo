angular.module('commutify', [
  'commutify.services',
  'commutify.auth',
  'commutify.input',
  'ui-router'
])

.config(function($stateProvider, $urlRouteProvider) {
  $urlRouteProvider.otherwise('/signin');

  $stateProvider
  	.state('home', {
  		url: '/index',
  		templateUrl: 'index.html'
  	})
  	.state('signin', {
      url: '/signin',
      templateUrl: '/auth/signin.html'
  	})
  	.state('signup', {
  	  url: '/signup',
  	  templateUrl: '/auth/signup.html'
  	})
  	.state('input', {
  	  url: '/input',
  	  templateUrl: '/input/input.html'
  	})
  	.state('input.list', {
      url: '/schedule',
      templateUrl: '/input/input.list.html',
      controller: function($scope) {
      	$scope.rides = [];  //ARRAY OF USER RIDES
      }
  	})
})

.run();