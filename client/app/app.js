angular.module('commutify', [
  'commutify.services',
  'commutify.auth',
  'commutify.ride',
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
  	.state('ride', {
  	  url: '/ride',
  	  templateUrl: '/ride/ride.html'
  	})
  	.state('ride.list', {
      url: '/schedule',
      templateUrl: '/ride/ride.list.html',
      controller: function($scope) {
      	$scope.rides = [];  //ARRAY OF USER RIDES
      }
  	})
})

.factory('AttachTokens', function($window) {
	//TODO: LOGIC FOR TOKEN
	var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.shortly');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})

.run(function($rootscope, $location, Auth) {
	//TODO: LOGIC FOR USER TOKEN VALIDATION ON NAVIGATION
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route.controller && next.$$route.controller !== 'AuthController') {
      Auth.isAuth()
        .then(function () {
        })
        .catch(function () {
          $location.path('/signin');
        });
    }
  });
});