import angular from 'angular'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import 'font-awesome/css/font-awesome.css'

const app = angular.module('eden', [])
app.controller('TestController', function($scope) {
	$scope.hello = '我要去海兰'
})
