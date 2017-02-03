angular
  .module('app')
  .component('fountainForm', {
    templateUrl: 'app/store/form.html',
    controller: FormCtrl
  });
  function FormCtrl($scope){
    $scope.next = function(){
      console.log('This should still work');
    }
  }
