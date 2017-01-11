import app from '../app'

app.directive('sideBar', () => {
	return {
		restrict: 'E',
      replace: true,
      template: require('./SideBar.html'),
      scope: {
      	btnName: '@btnName'
      },
      controller: ($scope) => {
        $(".button-collapse").sideNav()
        $scope.tags = [
          'JAVA', 'C++', 'SCALA', "RUST"
        ]
      }
	}
})