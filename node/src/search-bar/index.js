import angular from 'angular'
import 'angular-ui-router'

const name = 'search-bar'
const app = angular.module(name, ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.route = (url, param) => {
    return $stateProvider.state(url, {
      url: param.url,
      controller: require(param.controller),
      template: require(param.template)
    })
  }
  $stateProvider
  .route('home', {
    url: '/home',
    controller: './controller/HomeController',
    template: './view/add.html'
  })
})

/*app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      controller: require('./controller/HomeController'),
      template: require('./view/add.html'),
    })
    .state('test', {
      url: '/test',
      controller: require('./controller/TestController'),
      template: require('./view/test.html'), 
    })
    .state('test.view1', {
      url: '/view1',
      template: require('./view/test.view.html')
    })
})*/

import SearchBarDirective from './directive/SearchBarDirective'
app.directive(SearchBarDirective.name, SearchBarDirective.directive)
import TagBarDirective from './directive/TagBarDirective'
app.directive(TagBarDirective.name, TagBarDirective.directive)
import BookmarkListDirective from './directive/BookmarkListDirective'
app.directive(BookmarkListDirective.name, BookmarkListDirective.directive)

module.exports = {
  name: name,
  module: app
}