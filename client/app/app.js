angular.module('commutify', [
  'commutify.services',
  'commutify.auth',
  'commutify.ride',
  'ui.router',
  'firebase'
])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/index');

  $stateProvider
  	.state('home', {
  		url: '/index',
  		templateUrl: 'app/home.html'
  	})
  	.state('signin', {
      url: '/signin',
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
  	})
  	.state('signup', {
  	  url: '/signup',
  	  templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
  	})
  	.state('ride', {
  	  url: '/ride',
  	  templateUrl: 'app/Ride/ride.html',
      controller: 'RideController'
  	})
  	.state('schedule', {
      url: '/schedule',
      templateUrl: 'app/Ride/schedule.html',
      controller: 'RideController'
  	})
})

// .factory('AttachTokens', function($window) {
// 	//TODO: LOGIC FOR TOKEN
// 	var attach = {
//     request: function (object) {
//       var jwt = $window.localStorage.getItem('com.shortly');
//       if (jwt) {
//         object.headers['x-access-token'] = jwt;
//       }
//       object.headers['Allow-Control-Allow-Origin'] = '*';
//       return object;
//     }
//   };
//   return attach;
// })

// .run(function($rootScope, $location, Auth) {
// 	//TODO: LOGIC FOR USER TOKEN VALIDATION ON NAVIGATION
//   $rootScope.$on('$routeChangeStart', function (evt, next, current) {
//     if (next.$$route.controller && next.$$route.controller !== 'AuthController') {
//       Auth.isAuth()
//         .then(function () {
//         })
//         .catch(function () {
//           $location.path('/signin');
//         });
//     }
//   });
// });