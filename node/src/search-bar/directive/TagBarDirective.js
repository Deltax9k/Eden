import app from '../app'

app.directive('tagBar', () => {
  return {
      restrict: 'E',
      replace: true,
      template: require('./TagBar.html'),
      link: function(scope, element, attr) {
        $('.button-collapse').sideNav()
      },
      controller: ($scope) => {
        $scope.tags = [
          'JAVA', 'C++', 'SCALA', "RUST"
        ]
      }
    }
})