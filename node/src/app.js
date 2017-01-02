import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import 'font-awesome/css/font-awesome.css'
import angular from 'angular'

import './search-bar'

angular.bootstrap(document, [require('./search-bar/app').__name__])