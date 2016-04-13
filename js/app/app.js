angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/')

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeController'
        })
        .state('home.user', {
          url: 'user',
          templateUrl: 'views/home/user.html',
          controller: 'UserController'
        })
        .state('home.notifications', {
          url: 'notifications',
          templateUrl: 'views/home/notifications.html',
          controller: 'NotificationsController'
        })
        .state('home.timeline', {
          url: 'timeline',
          templateUrl: 'views/home/timeline.html',
          controller: 'TimelineController'
        })
    });