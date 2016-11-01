angular
		.module('starter.controllers', [])

		.controller(
				'LoginCtrl',
				function($scope, $state, Login) {
						$scope.user=function(){
							Login.getUser().then(function(response){
								console.log(response);
							},function(error){
								console.log(error);
							})
						};
					$scope.admin=function(){
						Login.getAdmin().then(function(response){
							console.log(response);
						},function(error){
							console.log(error);
						})
					};
					$scope.login=function(){
						var user={
							username:"test",
							password:"test"
						}
						Login.login(user).then(function(response){
							console.log(response);
						},function(error){
							console.log(error);
						})
					}
					$scope.login2=function(){
						var user={
							username:"test2",
							password:"test2"
						}
						Login.login(user).then(function(response){
							console.log(response);
						},function(error){
							console.log(error);
						})
					}
					$scope.loginout=function(){
						Login.loginout().then(function(response){
							console.log(response);
						},function(error){
							console.log(error);
						})
					}
				})