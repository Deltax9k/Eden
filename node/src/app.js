const angular = require('angular')
require('materialize-css')
require('materialize-css/dist/css/materialize.css')

const app = angular.module('eden', [])
app.controller('TestController', function($scope) {
	$scope.hello = '你要去海兰'
})
