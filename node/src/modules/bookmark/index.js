import app from 'modules/bookmark'

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'HomeController',
      template: require('./views/add.html'),
    })
    .state('test', {
      url: '/test',
      controller: require('./controllers/TestController'),
      template: require('./views/test.html'),
    })
    .state('test.view1', {
      url: '/view1',
      template: require('./views/test.view.html')
    })
})

app.controller('SearchBarController', require('./controllers/SearchBarController'))