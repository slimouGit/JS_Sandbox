angular
    .module('pizzaApp', ['ionic'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .otherwise('/order');

            $stateProvider
                .state('base', {
                    url: '/',
                    abstract: true,
                    views: {
                        'base': {
                            templateUrl: 'app/templates/base.html'
                        }
                    }
                })
                .state('base.order', {
                    url: 'order',
                    templateUrl: 'app/templates/order.html',
                    controller: 'OrderCtrl'
                })
                .state('about', {
                    parent: 'base',
                    url: 'about',
                    templateUrl: 'app/templates/about.html'
                });
        }
    ]);
