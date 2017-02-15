// angular
//   .module('app')
//   .component('fountainState', {
//     templateUrl: 'app/store/states.html',
//     controller:StatesCtrl
//   });
// function StatesCtrl($scope){
//   $scope.States = function(DogName){
//     console.log(DogName);
//   }
// }
angular
  .module('app')
  .component('fountainState', {
    templateUrl: 'app/store/form.html',
    controller: KnewCtrl
  });
  function KnewCtrl($scope){
    console.log('do you think this will work?');
  }
