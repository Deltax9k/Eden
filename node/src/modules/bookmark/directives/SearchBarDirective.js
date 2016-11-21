import app from 'modules/bookmark'

app.directive('searchBar', () => {
  return {
    restrict: 'E',
    replace: true,
    template: require('./searchBar.html')
  }
})