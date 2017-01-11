import app from '../app'

app.directive('searchBar', () => {
  return {
    restrict: 'E',
    replace: true,
    template: require('./SearchBar.html'),
    scope: {
      sideBarBtn: '@sideBarBtn'
    },
    controller: ($scope) => {
      $scope.showDropdown = (hints) => {
      	$scope.showTips = ! $scope.showTips
      }
      $scope.OpenSideBar = () => {
        console.log($scope.sideBarBtn)
        $('#' + $scope.sideBarBtn).click()
      }
    }
  }
})