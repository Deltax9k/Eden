import app from '../app'

app.directive('tagBar', () => {
  return {
      restrict: 'E',
      replace: true,
      template: require('./TagBar.html'),
      controller: ($scope) => {
        $scope.tags = [
          'JAVA', 'C++', 'SCALA', "RUST"
        ]
      }
    }
})