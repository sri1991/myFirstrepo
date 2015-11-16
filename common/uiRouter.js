angular.module('appRouter',['ui.router'])
	.config(['$stateProvider','$urlRouterProvider',
		function($stateProvider,$urlRouterProvider){
			$stateProvider
			.state('/home',{

				url:"/home",
				templateUrl:"application/home/home.html",
				controller:"homeCtrl"
			})

			.state('Game',{
				url:"/Game",
				templateUrl:"application/home/game.html",
				controller:"GameCtrl"
			})
			.state('End',{
				url:"/End",
				templateUrl:"application/home/end.html",
				controller:"endCtrl"
			})
			$urlRouterProvider.otherwise("/home");//default maps to home
		}
		])