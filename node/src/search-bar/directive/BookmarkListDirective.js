module.exports = {
	name: 'bookmarkList',
	directive: () => {
		return {
			restrict: 'E',
			replace: true,
      controller: require('../controller/BookmarkListController'),
			template: require('./bookmarkList.html')
		}
	}
}