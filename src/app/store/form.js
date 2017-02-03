angular
  .module('app')
  .component('fountainForm', {
    templateUrl: 'app/store/form.html',
    controller: FormCtrl
  });
  function FormCtrl($scope){
    $scope.next = function(DogName){
      /*
        - Needs to show the next question on click
        - Add the dog name to the other questions
        - This should be the button all the way down
      */
      console.log(DogName);
    }

  }
