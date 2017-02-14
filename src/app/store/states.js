angular
  .module('app')
  .component('fountainState', {
    templateUrl: 'app/store/states.html',
    controller:StatesCtrl
  });
function StatesCtrl($scope){
  $scope.States = function(DogName){
    console.log(DogName);
  }
}
