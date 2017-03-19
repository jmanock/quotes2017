angular
  .module('app')
  .component('fountainBreeds', {
    templateUrl: 'app/store/breeds.html',
    controller:BreedCtrl
  });
  function BreedCtrl($scope){
    $scope.Breeds=[
      {Name:'doggie'},
      {Name:'kitty'},
      {Name:'snake'}
    ]
    
  }
