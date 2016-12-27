module.exports = {
	name: 'tagBar',
	directive: () => {
		return {
      restrict: 'E',
      replace: true,
      controller: require('../controller/TagBarController'),
      template: require('./TagBar.html')
    }
	}
}