import app from '../app'

app.directive('searchBar', () => {
  return {
    restrict: 'E',
    replace: true,
    template: require('./SearchBar.html'),
    controller: ($scope) => {
      $scope.showDropdown = (hints) => {
      	$scope.showTips = ! $scope.showTips
      }
    }
  }
})