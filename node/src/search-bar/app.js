import angular from 'angular'
import 'angular-ui-router'

const name = 'search-bar'
const app = angular.module(name, ['ui.router'])
app.__name__ = name

module.exports = app