app.controller('MainCtrl', function($scope, FlashCardFactory) {
  $scope.show = false
    // make a query
  FlashCardFactory.getFlashCards()
    .then(function(cards) {
      $scope.show = true
      $scope.flashCards = cards;
    })
    .catch(function(e) {
      console.log('e', e);
    })

  $scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
  ];

  $scope.activeCat = null;

  $scope.filterByCategory = function(cat) {
    $scope.activeCat = cat;
    FlashCardFactory.getFlashCards(cat)
      .then(function(cards) {
        $scope.flashCards = cards;
      });
  };
})