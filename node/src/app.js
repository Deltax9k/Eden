import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import 'font-awesome/css/font-awesome.css'
import angular from 'angular'
import $ from 'jquery'
import velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
import './search-bar'

//将Velocity这个动画库加到jquery原型中
$.fn.velocity = velocity

angular.bootstrap(document, [require('./search-bar/app').__name__])