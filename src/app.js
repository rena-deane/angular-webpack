// Code goes here

(function() {
  var app = angular.module('gemStore', ['store-directives'])

  app.controller('StoreController', [ '$http', function('$http') {
    var store = this

    store.cats = [ ]

    $http.get('http://meow-rena.herokuapp.com/v1/cats')
      .success(data => {
        store.cats = data
      })

  }]);


})();