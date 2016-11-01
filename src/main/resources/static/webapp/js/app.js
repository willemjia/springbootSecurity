/**
 * Created by Administrator on 2016-07-21.
 */
angular.module('starter', ['starter.controllers', 'starter.services','ui.router','starter.directives','starter.constants','ui.bootstrap'])

    .config(function ($controllerProvider, $compileProvider, $filterProvider, $provide, $animateProvider) {
        var core = angular.module('starter');
        core.controller = $controllerProvider.register;
        core.directive  = $compileProvider.directive;
        core.filter     = $filterProvider.register;
        core.factory    = $provide.factory;
        core.service    = $provide.service;
        core.constant   = $provide.constant;
        core.value      = $provide.value;

        // Disables animation on items with class .ng-no-animation
        //$animateProvider.classNameFilter(/^((?!(ng-no-animation)).)*$/);
    })

.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'

            })
        ;
        // if none of the above states are matched, use this as the fallback

    $urlRouterProvider.deferIntercept();
    $urlRouterProvider.otherwise('/login');

    $locationProvider.html5Mode({enabled: false});
    }
)
    .run(function ($urlRouter) {
        $urlRouter.sync();
        $urlRouter.listen();
    })
.run(function($rootScope, $state, $stateParams, $window, $location,Login) {


});