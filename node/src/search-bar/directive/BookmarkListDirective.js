import app from '../app'

app.directive('bookmarkList', () => {
  return {
    restrict: 'E',
    replace: true,
    template: require('./bookmarkList.html'),
    controller: ($scope) => {
      $scope.bookmarks = [
        {describe: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'},
        {describe: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'},
        {describe: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'},
        {describe: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'},
      ]
    }
  }
})