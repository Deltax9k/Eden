module.exports = {
	name: 'searchBar',
	directive: () => {
		return {
			restrict: 'E',
      replace: true,
      template: require('./searchBar.html')
		}
	}
}